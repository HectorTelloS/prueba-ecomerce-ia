# Changelog

Todos los cambios notables de este proyecto se documentarán en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto sigue [Semantic Versioning](https://semver.org/lang/es/).

## [0.1.0] - 2026-06-30

### [Añadido]

- Servicio `getProducts` para consumir productos desde `GET /api/v1/products` de la API de Platzi.
- Hook genérico `useFetch` para gestionar estados `loading`, `error` y `data`.
- Componente `ProductCard` para mostrar imagen, título, precio y categoría del producto.
- Componente `ProductGrid` para renderizar el catálogo con estados de carga, error y vacío.
- Estilos SASS independientes por componente usando metodología BEM y enfoque mobile-first.
- Tests unitarios y de componentes para servicio, hook, tarjeta de producto y grilla de productos.
- Documentación técnica del módulo en `docs/product-catalog.md`.
