# Atlas de la IA - micrositio SEDIA

Prototipo web estático para revisión interna. Convierte el documento `Atlas de la IA - consolidado.docx` en una experiencia visual e interactiva
## Uso local

```bash
npm install
npm run dev
```

## Build publicable

```bash
npm run build
npm run preview
```

La carpeta `dist` resultante puede subirse como sitio estático a GitHub Pages, Cloudflare Pages, Netlify o Vercel tras validar que el contenido puede difundirse.

## Contenido editable

El contenido principal está en `src/data/atlas.ts`. Las imágenes están en `public/atlas`.

## Nota de privacidad

Esta primera versión incluye aviso visible de borrador interno y no debe publicarse sin revisión de contenido sensible.
