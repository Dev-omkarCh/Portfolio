/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      colors:{
        light : {
          primary: '#ffffff',
          secondary: '#f8fafc',
          accent: '#fed7aa',
          tertiary: '#f1f5f9',
          primaryText : '#0f172a',
          secondaryText : '#64748b',
          mutedText : '#94a3b8',
          accentPrimary : '#6366f1',
          accentSecondary : '#8b5cf6',
          accentGradient :'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);',
        },
        dark : {
          primary: '#0f172a',
          secondary: '#1e293b',
          tertiary: '#334155',
          accent: '#2563eb',
          primaryText : '#f8fafc',
          secondaryText : '#cbd5e1',
          mutedText : '#64748b',
          accentHover : "#1d4ed8",
          transitions : 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        },
      },
      boxShadow : {
        lite: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
        medium: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        heavy: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
      borderColor:{
        light: '#e2e8f0',
        dark: '#334155'
      },
      borderRadius:{
        small : '8px',
        medium: '12px',
        large: '20px',
      },
      fontFamily:{
        playfair: ['"Playfair Display"', 'serif'],
        
      },
      transitionDuration : {
        low : '0.3s',
        md : '0.5s',
        high : '0.8s'
      },
      transitionTimingFunction: {
        'new': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}


