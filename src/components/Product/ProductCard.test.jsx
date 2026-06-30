import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProductCard } from './ProductCard'

const product = {
  id: 1,
  title: 'Classic Red Pullover Hoodie',
  price: 10,
  description: 'Comfortable hoodie',
  images: ['https://placehold.co/600x400'],
  category: {
    id: 1,
    name: 'Clothes',
    image: 'https://placehold.co/300x300',
  },
}

describe('ProductCard', () => {
  it('renders product information', () => {
    render(<ProductCard product={product} />)

    expect(screen.getByRole('article')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: product.title })).toHaveAttribute('src', product.images[0])
    expect(screen.getByRole('heading', { name: product.title })).toBeInTheDocument()
    expect(screen.getByText('$10.00')).toBeInTheDocument()
    expect(screen.getByText('Clothes')).toBeInTheDocument()
  })

  it('uses fallback values when optional product fields are missing', () => {
    render(
      <ProductCard
        product={{
          id: 2,
          title: 'Minimal Product',
          price: 20,
          images: [],
          category: null,
        }}
      />,
    )

    expect(screen.getByRole('img', { name: 'Minimal Product' })).toHaveAttribute(
      'src',
      '/placeholder-product.svg',
    )
    expect(screen.getByText('Sin categoría')).toBeInTheDocument()
  })
})
