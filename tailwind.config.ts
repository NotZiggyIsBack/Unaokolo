import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'persian-blue': {
          '50': '#ebf4ff',
          '100': '#dbe9ff',
          '200': '#bfd6ff',
          '300': '#98baff',
          '400': '#6f92ff',
          '500': '#4e6aff',
          '600': '#2e3efd',
          '700': '#222de0',
          '800': '#212dc0',
          '900': '#222d8d',
          '950': '#141852',
        },  
        'zelena': {
          "tamna": "#208340",
        },
      },
      
    },
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}
export default config
