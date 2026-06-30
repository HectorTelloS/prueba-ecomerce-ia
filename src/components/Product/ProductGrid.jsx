import ProductCard from './ProductCard.jsx'
import './ProductGrid.scss'

export function ProductGrid({ products = [], isLoading = false, loading = false, error = null }) {
  const shouldShowLoading = isLoading || loading
  if (shouldShowLoading) {
    return (
      <section className="product-grid-state" aria-live="polite">
        <p className="product-grid-state__message">Cargando productos...</p>
      </section>
    )
  }

  if (error) {
    const message = typeof error === 'string' ? error : error?.message || 'No se pudieron cargar los productos.'

    return (
      <section className="product-grid-state" role="alert">
        <p className="product-grid-state__message product-grid-state__message--error">{message}</p>
      </section>
    )
  }

  if (products.length === 0) {
    return (
      <section className="product-grid-state" aria-live="polite">
        <p className="product-grid-state__message">No hay productos disponibles.</p>
      </section>
    )
  }

  return (
    <section className="product-grid" aria-label="Listado de productos">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}

export default ProductGrid
