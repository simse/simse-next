/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/notion.ts'
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
