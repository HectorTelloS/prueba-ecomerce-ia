import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProductGrid } from './ProductGrid'

const products = [
  {
    id: 1,
    title: 'Classic Red Pullover Hoodie',
    price: 10,
    images: ['https://placehold.co/600x400'],
    category: {
      id: 1,
      name: 'Clothes',
    },
  },
  {
    id: 2,
    title: 'Modern Chair',
    price: 25,
    images: ['https://placehold.co/600x400'],
    category: {
      id: 2,
      name: 'Furniture',
    },
  },
]

describe('ProductGrid', () => {
  it('renders loading state', () => {
    render(<ProductGrid products={[]} loading error={null} />)

    expect(screen.getByRole('status')).toHaveTextContent('Cargando productos...')
  })

  it('renders error state', () => {
    render(<ProductGrid products={[]} loading={false} error="Unable to fetch products" />)

    expect(screen.getByRole('alert')).toHaveTextContent('Unable to fetch products')
  })

  it('renders empty state', () => {
    render(<ProductGrid products={[]} loading={false} error={null} />)

    expect(screen.getByText('No hay productos disponibles.')).toBeInTheDocument()
  })

  it('renders product cards', () => {
    render(<ProductGrid products={products} loading={false} error={null} />)

    expect(screen.getByRole('heading', { name: 'Classic Red Pullover Hoodie' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Modern Chair' })).toBeInTheDocument()
  })
})
