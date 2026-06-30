import './ProductCard.scss'

const FALLBACK_IMAGE = '/placeholder-product.svg'
const DEFAULT_CATEGORY = 'Sin categoría'

function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

export function ProductCard({ product }) {
  const imageUrl = product.images?.[0] || FALLBACK_IMAGE
  const categoryName = product.category?.name || DEFAULT_CATEGORY

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img className="product-card__image" src={imageUrl} alt={product.title} loading="lazy" />
      </div>

      <div className="product-card__content">
        <span className="product-card__category">{categoryName}</span>
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__price">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
