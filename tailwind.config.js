/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B0B0B',
        surface: '#111111',
        soft: '#1C1C1C',
        text: {
          DEFAULT: '#EAEAEA',
          muted: '#9A9A9A',
        },
        accent: '#F3C041',
        accentHover: '#FFD86A',
        borderSubtle: '#262626',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 60px rgba(0,0,0,0.35)',
        glow: '0 0 0 1px rgba(255,255,255,0.04)',
      },
    },
  },
  plugins: [],
}
