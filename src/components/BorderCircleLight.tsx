interface BorderCircleLightProps {
  top?: string | number
  left?: string | number
  angle?: number
  opacity?: number
  size?: number
  borderColor?: string
  className?: string
}

export default function BorderCircleLight({
  top = '154px',
  left = '-291px',
  angle = -178.12,
  opacity = 1,
  size = 500,
  borderColor = '#3DB9A6',
  className = ''
}: BorderCircleLightProps) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${size / 2}px`,
        border: `1px solid ${borderColor}`,
        top,
        left,
        transform: `rotate(${angle}deg)`,
        opacity,
      }}
    />
  )
}
