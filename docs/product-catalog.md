# Catálogo de productos

## Objetivo

Este módulo implementa el flujo base de visualización de productos del e-commerce usando la API pública de Platzi.

Endpoint utilizado:

```text
GET https://api.escuelajs.co/api/v1/products
```

La ruta se validó contra la documentación oficial de Swagger UI disponible en `https://api.escuelajs.co/docs`.

## Capas

### Capa de datos

Archivo:

```text
src/services/products.js
```

Responsabilidades:

- Consumir `GET /api/v1/products`.
- Usar `fetch` nativo.
- Normalizar errores con `try/catch` para que la UI tenga un mensaje estable.

### Capa de lógica

Archivo:

```text
src/hooks/useFetch.js
```

Responsabilidades:

- Encapsular los estados obligatorios de UI: `loading`, `error` y `data`.
- Evitar actualizaciones de estado si el componente se desmonta durante una petición asíncrona.

### Capa de presentación

Archivos:

```text
src/components/Product/ProductCard.jsx
src/components/Product/ProductCard.scss
src/components/Product/ProductGrid.jsx
src/components/Product/ProductGrid.scss
```

Responsabilidades:

- Renderizar tarjetas de producto con imagen, título, precio y categoría.
- Mostrar estados de carga, error y listado vacío.
- Mantener estilos autónomos por componente con SASS y BEM.

## Testing

Los tests mockean `fetch`; no realizan peticiones HTTP reales a la API de Platzi.

Archivos:

```text
src/services/products.test.js
src/hooks/useFetch.test.jsx
src/components/Product/ProductCard.test.jsx
src/components/Product/ProductGrid.test.jsx
```

## Decisiones técnicas

- Se usa `Intl.NumberFormat` para formatear precios en USD de forma consistente.
- Se usa una imagen fallback para productos sin imagen.
- Se mantiene HTML semántico con `section`, `header` y `article`.
- La grilla es mobile-first: una columna por defecto, dos columnas desde `40rem` y tres desde `64rem`.
