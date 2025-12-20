export const inputClass =
  'w-full rounded-2xl border border-borderSubtle bg-primary px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent outline-none transition-colors'

export const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } },
}
