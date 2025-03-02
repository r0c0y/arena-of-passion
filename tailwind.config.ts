
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom Football team colors
				team: {
					black: '#000000',
					red: '#D90429',
					blue: '#00A6FB',
					gray: '#1B1B1B',
					white: '#FFFFFF',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				oswald: ['Oswald', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' },
				},
				'slide-left': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'slide-right': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'scale-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(0, 166, 251, 0.7), 0 0 10px rgba(0, 166, 251, 0.5)' },
					'50%': { boxShadow: '0 0 20px rgba(0, 166, 251, 0.9), 0 0 30px rgba(0, 166, 251, 0.7)' },
				},
				'text-flicker': {
					'0%': { opacity: '0.8' },
					'2%': { opacity: '0.1' },
					'5%': { opacity: '0.8' },
					'7%': { opacity: '0.1' },
					'10%': { opacity: '0.8' },
					'100%': { opacity: '1' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'count-up': {
					'0%': { '--num': '0' },
					'100%': { '--num': 'var(--end-num)' },
				},
				'glitch': {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
					'100%': { transform: 'translate(0)' },
				},
				'stat-bar-fill': {
					'0%': { width: '0%' },
					'100%': { width: 'var(--stat-percent)' },
				},
				'number-increment': {
					'0%': { content: 'var(--from-num)' },
					'100%': { content: 'var(--to-num)' },
				},
				'3d-rotate': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(360deg)' },
				},
				'card-hover-glow': {
					'0%, 100%': { boxShadow: '0 0 15px rgba(0, 166, 251, 0.4)' },
					'50%': { boxShadow: '0 0 30px rgba(0, 166, 251, 0.7)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-out': 'fade-out 0.6s ease-out',
				'slide-left': 'slide-left 0.5s ease-out',
				'slide-right': 'slide-right 0.5s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'text-flicker': 'text-flicker 2s linear forwards',
				'float': 'float 6s ease-in-out infinite',
				'count-up': 'count-up 2s forwards',
				'glitch': 'glitch 0.8s ease-in-out infinite',
				'stat-bar-fill': 'stat-bar-fill 1s ease-out forwards',
				'number-increment': 'number-increment 2s ease-out forwards',
				'3d-rotate': '3d-rotate 1.5s ease-in-out',
				'card-hover-glow': 'card-hover-glow 2s infinite',
			},
			backgroundImage: {
				'hero-pattern': "url('/src/assets/hero-bg.jpg')",
				'texture': "url('/src/assets/texture.png')",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
