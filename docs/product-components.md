# Componentes de producto

## Alcance

Se añadieron `ProductCard` y `ProductGrid` como componentes de presentación para mostrar productos de la API de Platzi sin acoplarlos al consumo HTTP.

## Decisiones

- `ProductCard` recibe un objeto `product` con la forma esperada por Platzi Fake Store API (`id`, `title`, `price`, `description`, `images`, `category`).
- `ProductGrid` maneja estados visuales de carga, error, vacío y éxito mediante props para mantener SRP y facilitar pruebas aisladas.
- Los estilos usan SCSS y nomenclatura BEM para evitar colisiones globales.

## Testing

Las pruebas viven junto a los componentes y validan renderizado, estados de UI y valores fallback sin realizar peticiones HTTP reales.
