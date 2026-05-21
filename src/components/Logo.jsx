// variant: 'color' | 'white'
export default function Logo({ size = 72, variant = 'color' }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.svg`}
      alt="Contigo Pan y Cebolla"
      width={Math.max(size, 72)}
      height={Math.max(size, 72)}
      className="object-contain"
      style={variant === 'white' ? { filter: 'brightness(0) invert(1)' } : undefined}
      decoding="async"
    />
  )
}
