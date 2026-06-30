import './ProductCard.scss'

const FALLBACK_IMAGE = '/vite.svg'

export function ProductCard({ product }) {
  const title = product?.title || 'Producto sin nombre'
  const price = Number.isFinite(product?.price) ? product.price : 0
  const description = product?.description || 'Sin descripción disponible.'
  const image = product?.images?.[0] || FALLBACK_IMAGE
  const category = product?.category?.name || 'Sin categoría'

  return (
    <article className="product-card" aria-label={title}>
      <img className="product-card__image" src={image} alt={title} />
      <div className="product-card__content">
        <p className="product-card__category">{category}</p>
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__description">{description}</p>
        <p className="product-card__price" aria-label={`Precio: $${price}`}>
          ${price}
        </p>
      </div>
    </article>
  )
}

export default ProductCard
