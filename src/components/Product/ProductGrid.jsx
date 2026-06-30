// src/components/Product/ProductGrid.jsx
import { ProductCard } from './ProductCard'
import './ProductGrid.scss'

export function ProductGrid({ products, onAddToCart }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  )
}
