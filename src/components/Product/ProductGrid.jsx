import { ProductCard } from './ProductCard'
import './ProductGrid.scss'

function ProductGridFeedback({ children, feedbackRole, modifier = '' }) {
  const messageClassName = ['product-grid__message', modifier].filter(Boolean).join(' ')

  return (
    <section className="product-grid product-grid--feedback" aria-labelledby="products-title">
      <h2 id="products-title" className="product-grid__title">
        Catálogo
      </h2>
      <p className={messageClassName} role={feedbackRole}>
        {children}
      </p>
    </section>
  )
}

export function ProductGrid({ products, loading, error }) {
  if (loading) {
    return <ProductGridFeedback feedbackRole="status">Cargando productos...</ProductGridFeedback>
  }

  if (error) {
    return (
      <ProductGridFeedback feedbackRole="alert" modifier="product-grid__message--error">
        {error}
      </ProductGridFeedback>
    )
  }

  if (!products.length) {
    return <ProductGridFeedback>No hay productos disponibles.</ProductGridFeedback>
  }

  return (
    <section className="product-grid" aria-labelledby="products-title">
      <header className="product-grid__header">
        <h2 id="products-title" className="product-grid__title">
          Catálogo
        </h2>
      </header>

      <div className="product-grid__list">
        {products.map((product) => (
          <div className="product-grid__item" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  )
}
