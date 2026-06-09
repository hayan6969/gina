interface SectionHeadingProps {
  preheading?: string
  heading: string
  subheading?: string
  description?: string
  centered?: boolean
  className?: string
}

export default function SectionHeading({
  preheading,
  heading,
  subheading,
  description,
  centered = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {preheading && (
        <p className=" insights-heading text-primary mb-4">
          {preheading}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-heading  text-gray-900 mb-4 text-balance leading-tight">
        {heading}
        {subheading && <span className="text-primary italic ml-2">{subheading}</span>}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  )
}
