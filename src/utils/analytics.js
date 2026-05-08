export function trackWhatsAppClick(source) {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'whatsapp_click', { source })
}
