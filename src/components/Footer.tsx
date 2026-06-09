import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#071A1C] text-dark-text py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-heading  mb-3 text-[#3C929D]">GinaG Speaks</h3>
            <p className="text-sm text-gray-300/50 leading-relaxed">
              Transformative keynote experiences that strengthen leaders, equip teams, and create lasting organizational impact.
            </p>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className="font-bold text-sm text-[#FFFFFF66] tracking-wide mb-4 uppercase">Navigation</h4>
            <ul className="space-y-2">
            <li><Link to="/" className="text-sm text-[#FFFFFF99] hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-[#FFFFFF99] hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/keynote-topics" className="text-sm text-[#FFFFFF99] hover:text-primary transition-colors">Keynote Topics</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-bold text-sm text-[#FFFFFF66] tracking-wide mb-4 uppercase ">Get in Touch</h4>
            <a href="mailto:gina@ginagspeaks.org" className="text-sm text-[#FFFFFF99] hover:text-primary transition-colors">
              gina@ginagspeaks.org
            </a>
            <p className="text-sm text-[#FFFFFF99] leading-relaxed">
              We look forward to partnering with you to create impactful, transformative experiences.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-sm text-[#FFFFFF40] text-center">
            © 2026 GinaG Speaks. All rights <br /> reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
