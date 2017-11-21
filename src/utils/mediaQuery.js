export default function mediaQuery(mobile, tablet = mobile, desktop = tablet) {
  if (window.matchMedia('(min-width: 1040px)').matches) return desktop
  if (window.matchMedia('(min-width: 768px)').matches) return tablet
  return mobile
}
