// variant: 'color' | 'white'
export default function Logo({ size = 60, variant = 'color' }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.svg`}
      alt="Contigo Pan y Cebolla"
      width={size}
      height={size}
      className="object-contain"
      style={variant === 'white' ? { filter: 'brightness(0) invert(1)' } : undefined}
      decoding="async"
    />
  )
}
