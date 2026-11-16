<div align="center">

# AURIL CARS

**Automotive Web Concept — Diseño frontend para servicios de automoción.**

![Next.js](https://img.shields.io/badge/Next.js-15-111111?style=flat-square&logo=nextdotjs)
![React](https://img.shields.io/badge/React-18-149ECA?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

[**Ver demo web**](https://juanjogamero.github.io/auril-cars/) · [**Código fuente**](src/app/page.tsx) · [**GitHub Actions**](https://github.com/juanjogamero/auril-cars/actions)

</div>

---

## El proyecto

**Auril Cars** es una web corporativa conceptual orientada a un negocio de automoción, desarrollada para demostrar capacidades de diseño frontend y construcción de experiencias web modernas.

La interfaz está desarrollada con **Next.js 15, React 18, TypeScript y Tailwind CSS**, con componentes adaptables a distintos dispositivos. La aplicación se exporta como sitio estático, por lo que puede publicarse en GitHub Pages sin servidor Node.js.

> [!IMPORTANT]
> **Proyecto de portfolio, no una empresa operativa.** Los servicios son categorías de ejemplo, las fotografías externas son ilustrativas y la web no incorpora reservas, compra de productos, recepción de solicitudes ni atención comercial real. No se muestran precios, testimonios ni datos empresariales inventados.

## Qué puedes explorar

| Apartado | Funcionalidades |
| --- | --- |
| **Portada** | Presentación visual del concepto, navegación a secciones y CTA funcionales |
| **Servicios** | Filtros interactivos por categoría y tarjetas con información ampliable |
| **Concepto** | Principios de diseño, tecnologías y estructura del proyecto |
| **Galería** | Referencias visuales del sector con imágenes ilustrativas |
| **Proyecto** | Acceso al código fuente y aclaración del alcance de la demo |
| **Navegación** | Diseño responsive con menú para móvil |

El proyecto incluye interacciones de interfaz, pero **no necesita una base de datos ni API de backend** para su demostración.

## Tecnologías

- **Next.js 15**: App Router y generación de páginas estáticas.
- **React 18**: componentes, estado para filtros y menú móvil.
- **TypeScript**: tipado de categorías y datos de la interfaz.
- **Tailwind CSS 3**: estilos adaptativos.
- **Lucide React**: iconografía.
- **GitHub Actions**: validación de tipos, compilación y publicación del directorio `out/`.

## Ejecutar localmente

Necesitas **Node.js 22** y npm.

```bash
git clone https://github.com/juanjogamero/auril-cars.git
cd auril-cars
npm ci
npm run dev
```

Abre `http://localhost:3000` en tu navegador.

Para validar y generar la exportación:

```bash
npm run typecheck
npm run build
```

El resultado de la exportación estática se genera en `out/`.

## Despliegue en GitHub Pages

El workflow `.github/workflows/pages.yml` realiza las siguientes operaciones:

1. Instala dependencias mediante `npm ci`.
2. Valida TypeScript.
3. Ejecuta `npm run build` con `GITHUB_PAGES=true`.
4. Publica la exportación estática de `out/` en GitHub Pages.

Para activarlo:

1. Abre [**Settings → Pages**](https://github.com/juanjogamero/auril-cars/settings/pages).
2. Selecciona **GitHub Actions** como fuente.
3. Ve a [**Build and deploy Auril Cars to GitHub Pages**](https://github.com/juanjogamero/auril-cars/actions/workflows/pages.yml) y ejecuta **Run workflow** sobre `main`.
4. Comprueba que la ejecución finaliza correctamente.

**URL prevista:** https://juanjogamero.github.io/auril-cars/

La página no debe considerarse publicada hasta que GitHub confirme un despliegue correcto.

## Estructura principal

```text
auril-cars/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Landing principal y componentes interactivos
│   │   ├── layout.tsx         # Metadatos y layout base
│   │   ├── globals.css        # Tailwind y estilos globales
│   │   └── ClientBody.tsx
│   ├── components/            # Componentes de la implementación inicial
│   └── lib/
├── next.config.js             # Exportación estática y ruta de GitHub Pages
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── .github/workflows/pages.yml
```

## Estado y próximos pasos

La portada del portfolio utiliza una implementación renovada, mientras que algunos componentes de la versión anterior permanecen en `src/components/` como material de desarrollo, sin utilizarse en la página principal.

Antes de convertir esta demo en una web comercial real, sería necesario incorporar información verificada de la empresa, fotografías propias, permisos de uso de imágenes, formularios conectados a backend seguro y los textos legales correspondientes.

---

<div align="center"><strong>Juan José Gamero López</strong> · Diseño y desarrollo web</div>
