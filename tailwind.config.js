/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      fontFamily: {
        sans: ["var(--font-lato)", "sans-serif"], // por defecto
        jakarta: ["var(--font-plus-jakarta)", "sans-serif"], // títulos
        pacifico: ["var(--font-pacifico)", "cursive"], // palabras especiales
      },
      boxShadow: {
        custom: "0px 0px 20px rgba(0,0,0,0.25)",       // sombra difusa en todos lados
        customTop: "0px -5px 10px rgba(0,0,0,0.25)",   // sombra hacia arriba
        customBottom: "0px 4px 8px rgba(0,0,0,0.25)",  // sombra hacia abajo
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			// Colores base de shadcn/ui
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			
  			  			// 🎨 Colores de la marca - Fondos
  			brand: {
  				main: '#ECF4F9',         // Fondo principal (Azul muy claro)
  				secondary: '#FDF9F3',    // Fondo secundario (Beige muy claro)
  				tertiary: '#F5F0E8',     // Fondo terciario (Beige ligeramente más oscuro)
  			},
  			
  			// 🟡 Familia Amarillo (Primary - Botones principales/Destacados)
  			yellow: {
  				DEFAULT: '#F2B705',       // Principal (Amarillo cálido)
  				50: '#F2B70520',         // Light/Subtle (20% opacidad)
  				100: '#F2B70550',        // Disabled (50% opacidad)
  				500: '#F2B705',          // Principal
  				600: '#D4A004',          // Hover (Amarillo más intenso)
  				700: '#B8890E',          // Active/Pressed (Amarillo más oscuro)
  			},
  			
  			// 🔴 Familia Rojo (Secondary - Llamadas a la acción/Urgencia)
  			red: {
  				DEFAULT: '#C4622D',       // Principal (Rojo terracota)
  				50: '#C4622D15',         // Light/Subtle (15% opacidad)
  				100: '#C4622D50',        // Disabled (50% opacidad)
  				500: '#C4622D',          // Principal
  				600: '#A8512A',          // Hover (Rojo más profundo)
  				700: '#8B4226',          // Active/Pressed (Rojo más oscuro)
  			},
  			
  			// 🔵 Familia Azul (Accent - Elementos decorativos/Información)
  			blue: {
  				DEFAULT: '#A8C8E1',       // Principal (Azul polvo)
  				50: '#A8C8E110',         // Muy sutil (10% opacidad)
  				100: '#A8C8E130',        // Light/Info (30% opacidad)
  				500: '#A8C8E1',          // Principal
  				600: '#94B8D9',          // Hover (Azul más intenso)
  				700: '#7FA8D1',          // Active (Azul más profundo)
  			},
  			
  			// ⚫ Familia Grises (Texto y elementos neutros)
  			gray: {
  				400: '#CCCCCC',          // Bordes principales (Gris muy claro)
  				500: '#999999',          // Texto terciario (Gris claro)
  				600: '#666666',          // Texto secundario (Gris medio)
  				700: '#404040',          // Texto principal (Gris carbón)
  				800: '#E5E5E5',          // Bordes suaves (Gris casi blanco)
  				900: '#F0F0F0',          // Hover en elementos neutros (Gris hover)
  			},
  			
  			// 🟢 Colores de Estado (Adicionales)
  			success: {
  				DEFAULT: '#28A745',       // Verde éxito
  				600: '#218838',          // Verde éxito hover
  			},
  			warning: {
  				DEFAULT: '#FFC107',       // Amarillo advertencia
  				600: '#E0A800',          // Amarillo advertencia hover
  			},
  			error: {
  				DEFAULT: '#DC3545',       // Rojo error
  				600: '#C82333',          // Rojo error hover
  			},
  			info: {
  				DEFAULT: '#17A2B8',       // Azul información
  				600: '#138496',          // Azul información hover
  			},
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
