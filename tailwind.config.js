/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Colores principales SENA
        'sena-blue': '#00324D', // Azul SENA - Color principal
        'sena-green': '#39A900', // Verde SENA - Color secundario
        'sena-orange': '#FF6B00', // Naranja SENA - Color de acento

        // Variantes de azul SENA para la interfaz
        'sena-blue-light': '#0055B3', // Azul claro para variaciones
        'sena-blue-dark': '#002438', // Azul oscuro para fondos
        'sena-blue-hover': '#003E60', // Azul hover para botones
        
        // Grises para la interfaz
        'sena-gray-50': '#F9FAFB', // Gris muy claro para fondos
        'sena-gray-100': '#F3F4F6', // Gris claro para fondos alternos
        'sena-gray-200': '#E5E7EB', // Gris para bordes
        'sena-gray-300': '#D1D5DB', // Gris para bordes más oscuros
        'sena-gray-400': '#9CA3AF', // Gris para texto deshabilitado
        'sena-gray-500': '#6B7280', // Gris para texto secundario
        'sena-gray-600': '#4B5563', // Gris para texto principal
        'sena-gray-700': '#374151', // Gris oscuro para texto destacado
        'sena-gray-800': '#1F2937', // Gris muy oscuro para encabezados
        'sena-gray-900': '#111827', // Gris casi negro para textos de alto contraste

        // Colores de estado
        'sena-success': '#059669', // Verde para éxito
        'sena-warning': '#F59E0B', // Amarillo para advertencias
        'sena-error': '#DC2626', // Rojo para errores
        'sena-info': '#2563EB', // Azul información
      },
      fontFamily: {
        // Tipo de letra principal de SENA es Gotham, pero usamos alternativas web-safe
        sans: [
          'Gotham', // Se cargará si está disponible
          'Montserrat', // Alternativa cercana a Gotham
          'Roboto',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        title: [
          'Gotham Bold', // Para títulos
          'Montserrat',
          'Roboto',
          'sans-serif',
        ],
      },
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem', // 2px
        DEFAULT: '0.25rem', // 4px
        md: '0.375rem', // 6px
        lg: '0.5rem', // 8px
        xl: '0.75rem', // 12px
        '2xl': '1rem', // 16px
        full: '9999px', // Circular
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 50, 77, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 50, 77, 0.1), 0 1px 2px 0 rgba(0, 50, 77, 0.06)',
        md: '0 4px 6px -1px rgba(0, 50, 77, 0.1), 0 2px 4px -1px rgba(0, 50, 77, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 50, 77, 0.1), 0 4px 6px -2px rgba(0, 50, 77, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 50, 77, 0.1), 0 10px 10px -5px rgba(0, 50, 77, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 50, 77, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 50, 77, 0.06)',
        none: 'none',
      },
    },
  },
  plugins: [],
};
