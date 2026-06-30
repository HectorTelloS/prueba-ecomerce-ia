// src/pages/Home/Home.jsx
import { useEffect, useState } from 'react'
import { Spinner } from '../../components/Common/Spinner'
import { ProductGrid } from '../../components/Product/ProductGrid'
import { useCart } from '../../context/CartContext'
import { getProducts } from '../../services/products'
import './Home.scss'

export function Home() {
  const { addItem } = useCart()
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function loadProducts() {
      try {
        setStatus('loading')
        const data = await getProducts()

        if (isMounted) {
          setProducts(data)
          setStatus('success')
        }
      } catch (currentError) {
        if (isMounted) {
          setError(currentError.message)
          setStatus('error')
        }
      }
    }

    loadProducts()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <main className="home-page">
      <section className="home-page__hero" aria-labelledby="home-title">
        <p className="home-page__eyebrow">E-commerce React + Platzi API</p>
        <h1 className="home-page__title" id="home-title">Productos listos para tu carrito</h1>
        <p className="home-page__description">
          Explora artículos reales desde la API de EscuelaJS y construye tu compra con persistencia local.
        </p>
      </section>

      <section className="home-page__catalog" aria-labelledby="catalog-title">
        <h2 className="home-page__subtitle" id="catalog-title">Catálogo</h2>
        {status === 'loading' && <Spinner />}
        {status === 'error' && <p className="home-page__error" role="alert">{error}</p>}
        {status === 'success' && <ProductGrid products={products} onAddToCart={addItem} />}
      </section>
    </main>
  )
}
