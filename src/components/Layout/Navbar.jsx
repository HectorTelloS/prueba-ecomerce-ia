// src/components/Layout/Navbar.jsx
import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './Navbar.scss'

export function Navbar() {
  const { totalItems } = useCart()

  return (
    <header className="navbar">
      <nav className="navbar__nav" aria-label="Navegación principal">
        <NavLink className="navbar__brand" to="/">Platzi Store</NavLink>
        <div className="navbar__links">
          <NavLink className="navbar__link" to="/">Productos</NavLink>
          <NavLink className="navbar__link" to="/cart">Carrito ({totalItems})</NavLink>
        </div>
      </nav>
    </header>
  )
}
