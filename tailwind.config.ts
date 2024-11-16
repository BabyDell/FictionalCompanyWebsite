import type { Config } from "tailwindcss";

const flowbite = require("flowbite-react/tailwind");

const config: Config = {
    darkMode: ["class"],
    mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		fontFamily: {
  			'Jacques-Francois-Shadow': ["Jacques-Francois-Shadow", "sans-serif"],
  			'Playfair-Display': ["Playfair-Display", "sans-serif"],
  			"MerriWeather": ['Merriweather', 'sans-serif'],
  			'Afacad': ['Afacad', 'sans-serif']
  		},
  		colors: {
  			'red-hex': '#b40404',
  			'custom-orange': '#e2d1c3'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [flowbite.plugin(), require("tailwindcss-animate")],
};
export default config;
