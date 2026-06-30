// src/pages/Cart/Cart.jsx
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './Cart.scss'

export function Cart() {
  const { items, removeItem, totalPrice, clearCart } = useCart()

  return (
    <main className="cart-page">
      <section className="cart-page__header" aria-labelledby="cart-title">
        <h1 className="cart-page__title" id="cart-title">Carrito de compras</h1>
        <p className="cart-page__summary">Total: ${totalPrice}</p>
      </section>

      {items.length === 0 ? (
        <section className="cart-page__empty" aria-label="Carrito vacío">
          <p>Tu carrito está vacío.</p>
          <Link className="cart-page__link" to="/">Volver al catálogo</Link>
        </section>
      ) : (
        <section className="cart-page__content" aria-label="Productos del carrito">
          <ul className="cart-page__list">
            {items.map((item) => (
              <li className="cart-page__item" key={item.id}>
                <img className="cart-page__image" src={item.images?.[0]} alt={item.title} />
                <div>
                  <h2 className="cart-page__item-title">{item.title}</h2>
                  <p className="cart-page__item-meta">Cantidad: {item.quantity} · ${item.price}</p>
                </div>
                <button className="cart-page__button cart-page__button--ghost" type="button" onClick={() => removeItem(item.id)}>
                  Quitar
                </button>
              </li>
            ))}
          </ul>
          <button className="cart-page__button" type="button" onClick={clearCart}>Vaciar carrito</button>
        </section>
      )}
    </main>
  )
}
