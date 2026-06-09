import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Dev-only middleware so `npm run dev` serves the Vercel serverless
// function at /api/contact locally (Vite alone does not run /api).
function devApi(env: Record<string, string>): Plugin {
  return {
    name: 'dev-api-contact',
    apply: 'serve',
    configureServer(server) {
      // Make the Resend key from .env.local available to the handler.
      if (env.RESEND_API_KEY) process.env.RESEND_API_KEY = env.RESEND_API_KEY

      server.middlewares.use('/api/contact', async (req, res) => {
        try {
          const chunks: Buffer[] = []
          for await (const chunk of req) chunks.push(chunk as Buffer)
          const raw = Buffer.concat(chunks).toString('utf-8')
          ;(req as any).body = raw ? JSON.parse(raw) : {}

          // Minimal Vercel-style res shim over Node's ServerResponse.
          const vercelRes = res as any
          vercelRes.status = (code: number) => {
            res.statusCode = code
            return vercelRes
          }
          vercelRes.json = (body: unknown) => {
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(body))
            return vercelRes
          }

          const { default: handler } = await server.ssrLoadModule('/api/contact.ts')
          await handler(req, vercelRes)
        } catch (err) {
          console.error('[dev-api-contact] error:', err)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: false, message: 'Dev server error' }))
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  // Load all env vars (incl. non-VITE_ prefixed) from .env.local for dev.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), devApi(env)],
    server: {
      port: 3000,
      open: false,
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: 'terser',
    },
  }
})
