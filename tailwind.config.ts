import type { Config } from 'tailwindcss'

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'gray': '#9ca3af',
        'black': '#000000',
        'pink': '#ec4899',
        'purple': '#6020a0',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui({
    defaultTheme: 'dark',
    defaultExtendTheme: 'dark',
  })],
}

export default config
