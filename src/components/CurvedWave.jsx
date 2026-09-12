/**
 * CurvedWave Component
 * Renders an organic, smooth SVG wave boundary matching the brand's wave design.
 * Scalable across small (mobile), medium (tablet), and large (desktop) screens with zero content overlap.
 */

const COLOR_MAP = {
  ivory: 'var(--ivory)',
  cream: '#f8eebd',
  'ivory-deep': 'var(--ivory-deep)',
  tinted: 'rgba(78, 54, 104, 0.92)',
  deep: 'var(--green-deep)',
  'deep-plum': '#3a1d5d',
  gold: 'var(--gold)',
  apricot: 'var(--apricot)',
  lilac: '#eee4f8',
  white: '#ffffff',
  footer: '#221237',
}

export default function CurvedWave({
  color = 'ivory',
  bg = 'transparent',
  flipX = false,
  flipY = false,
  className = '',
  style = {},
}) {
  const resolvedFill = COLOR_MAP[color] || color
  const resolvedBg = COLOR_MAP[bg] || bg

  const transform = [
    flipX ? 'scaleX(-1)' : '',
    flipY ? 'scaleY(-1)' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={`curved-wave-wrap ${className}`}
      style={{
        backgroundColor: resolvedBg,
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        className="curved-wave-svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        style={transform ? { transform } : undefined}
      >
        <path
          d="M -10,76 C 140,50 260,36 380,36 C 540,36 680,68 810,83 C 900,92 950,94 1000,94 C 1130,94 1280,66 1450,16 L 1450,130 L -10,130 Z"
          fill={resolvedFill}
          stroke={resolvedFill}
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}
