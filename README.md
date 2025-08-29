# Fina Parafina

Este es un proyecto de [Next.js](https://nextjs.org) creado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) y configurado con un sistema de diseño personalizado.

## 🚀 Inicio Rápido

### Requisitos

- Node.js 18+
- pnpm (recomendado)

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd fina-parafina

# Instalar dependencias
pnpm install

# Ejecutar servidor de desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 🛠️ Stack Tecnológico

### Core

- **Next.js 15.5.2** - Framework React con App Router
- **React 19.1.0** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Turbopack** - Bundler optimizado (habilitado)

### Estilos y UI

- **Tailwind CSS 3.4.17** - Framework de CSS utilitario
- **shadcn/ui** - Componentes de UI reutilizables
- **Class Variance Authority (CVA)** - Variantes de componentes
- **Tailwind Merge** - Fusión inteligente de clases
- **Tailwindcss Animate** - Animaciones

### Iconografía

- **Lucide React** - Biblioteca de iconos

### Tipografías

- **Lato** - Fuente principal (sans-serif)
- **Plus Jakarta Sans** - Títulos y encabezados
- **Pacifico** - Texto decorativo y especial

## 🎨 Sistema de Diseño

### Paleta de Colores

#### Colores de Marca

- `brand-main`: #ECF4F9 (Fondo principal - Azul muy claro)
- `brand-secondary`: #FDF9F3 (Fondo secundario - Beige muy claro)
- `brand-tertiary`: #F5F0E8 (Fondo terciario - Beige)

#### Colores Principales

- **Amarillo** (#F2B705) - Botones principales y destacados
- **Rojo** (#C4622D) - Llamadas a la acción y urgencia
- **Azul** (#A8C8E1) - Elementos decorativos e información
- **Grises** - Texto y elementos neutros (400-900)

#### Colores de Estado

- **Éxito**: #28A745
- **Advertencia**: #FFC107
- **Error**: #DC3545
- **Información**: #17A2B8

### Fuentes Configuradas

```css
font-lato     /* Texto principal */
font-jakarta  /* Títulos */
font-pacifico /* Palabras especiales */
```

### Sombras Personalizadas

```css
shadow-custom       /* Sombra difusa general */
shadow-customTop    /* Sombra hacia arriba */
shadow-customBottom /* Sombra hacia abajo */
```

## 📁 Estructura del Proyecto

```
src/
├── app/                 # App Router de Next.js
│   ├── foundations/     # Página de fundamentos de diseño
│   ├── globals.css      # Estilos globales y variables CSS
│   ├── layout.tsx       # Layout principal con fuentes
│   └── page.tsx         # Página de inicio
├── components/          # Componentes reutilizables
│   └── ui/              # Componentes de shadcn/ui
└── lib/
    └── utils.ts         # Utilidades (cn function)
```

## ⚙️ Configuraciones

### shadcn/ui

- **Configuración**: `components.json`
- **Estilo**: Default
- **Color base**: Zinc
- **Variables CSS**: Habilitadas
- **Iconos**: Lucide React

### Tailwind CSS

- **Modo oscuro**: Basado en clases
- **Variables CSS**: Integradas con shadcn/ui
- **Plugins**: tailwindcss-animate

### ESLint

- **Configuración**: ESLint 9 con formato plano
- **Extensiones**: next/core-web-vitals, next/typescript
- **Archivos ignorados**: node_modules, .next, out, build

### PostCSS

- **Plugins**: Tailwind CSS + Autoprefixer

## 📜 Scripts Disponibles

```bash
pnpm dev        # Servidor de desarrollo con Turbopack
pnpm build      # Build de producción con Turbopack
pnpm start      # Servidor de producción
pnpm lint       # Linting con ESLint
```

## 🎯 Características

- ✅ **App Router** de Next.js 15
- ✅ **Turbopack** habilitado para desarrollo y build
- ✅ **Sistema de diseño** completo y personalizado
- ✅ **Componentes shadcn/ui** preconfigurados
- ✅ **Tipografías Google Fonts** optimizadas
- ✅ **Modo oscuro** soportado
- ✅ **TypeScript** con configuración estricta
- ✅ **ESLint** moderno con formato plano
- ✅ **Variables CSS** para temas dinámicos

## 📚 Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de shadcn/ui](https://ui.shadcn.com)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Tutorial interactivo de Next.js](https://nextjs.org/learn)

## 🚢 Despliegue

La forma más sencilla de desplegar tu aplicación Next.js es usar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.
