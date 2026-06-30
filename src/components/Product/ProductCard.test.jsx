import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import { ProductCard } from './ProductCard'

const product = {
  id: 1,
  title: 'Classic Shoes',
  price: 59,
  description: 'Comfortable shoes',
  images: ['https://example.com/shoes.jpg'],
  category: { id: 4, name: 'Shoes' },
}

describe('ProductCard', () => {
  it('renders product data and calls the add handler', async () => {
    const user = userEvent.setup()
    const onAddToCart = vi.fn()

    render(<MemoryRouter><ProductCard product={product} onAddToCart={onAddToCart} /></MemoryRouter>)

    expect(screen.getByRole('article', { name: /classic shoes/i })).toBeInTheDocument()
    expect(screen.getByText('$59')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /ver detalle/i })).toHaveAttribute('href', '/products/1')

    await user.click(screen.getByRole('button', { name: /agregar al carrito/i }))
    expect(onAddToCart).toHaveBeenCalledWith(product)
  })
})
