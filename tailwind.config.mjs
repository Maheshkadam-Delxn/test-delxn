/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: 'class',
  theme: {
    extend: {
      screens: {
        phone: {'min':'320px','max':'767px'},
        tablet: { 'min': '768px', 'max': '1024px' }, // Tablets and small laptops
        laptop: {'min':'1025px','max':'1367px'},
        // desktop: {'min':'1281px','max':'1366px'},
        desktopxl: {'min':'1368px','max':'2560px'},
        // desktop2xl: {'min':'1921px','max':'2560px'},
        desktop3xl: {'min':'2561px','max':'3840px'},
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'navy': {
          900: '#001433',
          800: '#001e4d',
        },
        'blue': {
          400: '#3498FE',
        },
        'gray': {
          900: '#111827',
          800: '#1f2937',
          700: '#374151',
          600: '#4b5563',
          300: '#d1d5db',
          200: '#e5e7eb',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        sm: '4px',
      },
    },
  },
  plugins: [],
};
