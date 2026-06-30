import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ProductGrid from './ProductGrid.jsx'

const products = [
  {
    id: 1,
    title: 'Classic Shoes',
    price: 59,
    description: 'Comfortable everyday shoes',
    images: ['https://placehold.co/600x600'],
    category: { id: 2, name: 'Shoes', image: 'https://placehold.co/300x300' },
  },
]

describe('ProductGrid', () => {
  it('renders loading state', () => {
    render(<ProductGrid isLoading />)

    expect(screen.getByText(/cargando productos/i)).toBeInTheDocument()
  })

  it('renders error state', () => {
    render(<ProductGrid error="Error de carga" />)

    expect(screen.getByRole('alert')).toHaveTextContent('Error de carga')
  })

  it('renders empty state', () => {
    render(<ProductGrid products={[]} />)

    expect(screen.getByText(/no hay productos disponibles/i)).toBeInTheDocument()
  })

  it('renders product cards', () => {
    render(<ProductGrid products={products} />)

    expect(screen.getByRole('article', { name: /classic shoes/i })).toBeInTheDocument()
  })
})
