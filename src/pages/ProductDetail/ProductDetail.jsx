// src/pages/ProductDetail/ProductDetail.jsx
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Spinner } from '../../components/Common/Spinner'
import { useCart } from '../../context/CartContext'
import { getProductById } from '../../services/products'
import './ProductDetail.scss'

export function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const [product, setProduct] = useState(null)
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function loadProduct() {
      try {
        setStatus('loading')
        const data = await getProductById(id)

        if (isMounted) {
          setProduct(data)
          setStatus('success')
        }
      } catch (currentError) {
        if (isMounted) {
          setError(currentError.message)
          setStatus('error')
        }
      }
    }

    loadProduct()

    return () => {
      isMounted = false
    }
  }, [id])

  return (
    <main className="product-detail">
      {status === 'loading' && <Spinner label="Cargando detalle" />}
      {status === 'error' && <p className="product-detail__error" role="alert">{error}</p>}
      {status === 'success' && product && (
        <article className="product-detail__card">
          <img className="product-detail__image" src={product.images?.[0]} alt={product.title} />
          <section className="product-detail__content" aria-labelledby="product-detail-title">
            <Link className="product-detail__back" to="/">← Volver</Link>
            <p className="product-detail__category">{product.category?.name}</p>
            <h1 className="product-detail__title" id="product-detail-title">{product.title}</h1>
            <p className="product-detail__description">{product.description}</p>
            <p className="product-detail__price">${product.price}</p>
            <button className="product-detail__button" type="button" onClick={() => addItem(product)}>
              Agregar al carrito
            </button>
          </section>
        </article>
      )}
    </main>
  )
}
