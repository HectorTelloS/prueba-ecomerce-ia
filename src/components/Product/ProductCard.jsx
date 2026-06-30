// src/components/Product/ProductCard.jsx
import { Link } from 'react-router-dom'
import './ProductCard.scss'

export function ProductCard({ product, onAddToCart }) {
  const image = product.images?.[0]

  return (
    <article className="product-card" aria-label={product.title}>
      <img className="product-card__image" src={image} alt={product.title} loading="lazy" />
      <div className="product-card__body">
        <p className="product-card__category">{product.category?.name || 'Producto'}</p>
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__price">${product.price}</p>
        <div className="product-card__actions">
          <Link className="product-card__link" to={`/products/${product.id}`}>Ver detalle</Link>
          <button className="product-card__button" type="button" onClick={() => onAddToCart(product)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </article>
  )
}
