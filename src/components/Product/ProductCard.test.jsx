import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ProductCard from './ProductCard.jsx'

const product = {
  id: 1,
  title: 'Classic Shoes',
  price: 59,
  description: 'Comfortable everyday shoes',
  images: ['https://placehold.co/600x600'],
  category: { id: 2, name: 'Shoes', image: 'https://placehold.co/300x300' },
}

describe('ProductCard', () => {
  it('renders product information', () => {
    render(<ProductCard product={product} />)

    expect(screen.getByRole('article', { name: /classic shoes/i })).toBeInTheDocument()
    expect(screen.getByText('Classic Shoes')).toBeInTheDocument()
    expect(screen.getByText('$59')).toBeInTheDocument()
    expect(screen.getByText('Shoes')).toBeInTheDocument()
  })

  it('uses fallback values when optional product fields are missing', () => {
    render(<ProductCard product={{ id: 2 }} />)

    expect(screen.getByText('Producto sin nombre')).toBeInTheDocument()
    expect(screen.getByText('Sin descripción disponible.')).toBeInTheDocument()
    expect(screen.getByText('Sin categoría')).toBeInTheDocument()
  })
})
