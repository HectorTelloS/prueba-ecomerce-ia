# Arquitectura inicial de Platzi Store

## Decisiones

- La aplicación usa Vite, React funcional y React Router con `createBrowserRouter` para mantener el enrutamiento declarativo y centralizado.
- El flujo de datos queda separado por capas: `services/` consume la API de Platzi, las páginas coordinan estados de carga/error/éxito y los componentes `Product` solo renderizan UI reutilizable.
- El carrito se gestiona con Context API y persiste en `localStorage` bajo la clave `platzi-cart`, porque es un estado global de baja frecuencia de cambio.
- Los estilos se organizan con SCSS mobile-first, BEM y mixins compartidos para evitar duplicación.

## Contrato de API validado

La implementación usa la API pública de EscuelaJS/Platzi en `https://api.escuelajs.co/api/v1` y los endpoints:

- `GET /products?offset=0&limit=12`
- `GET /products/{id}`

Los mocks de prueba respetan la forma de producto esperada: `id`, `title`, `price`, `description`, `images` y `category`.
