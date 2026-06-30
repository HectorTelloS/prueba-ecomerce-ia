import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, beforeEach, vi } from 'vitest'
import { CartProvider, useCart } from './CartContext'

const product = {
  id: 1,
  title: 'Classic Shoes',
  price: 59,
  images: ['https://example.com/shoes.jpg'],
}

function CartConsumer() {
  const { addItem, items, totalItems, totalPrice, removeItem } = useCart()

  return (
    <div>
      <p>Items: {totalItems}</p>
      <p>Total: {totalPrice}</p>
      <p>Lines: {items.length}</p>
      <button type="button" onClick={() => addItem(product)}>Add</button>
      <button type="button" onClick={() => removeItem(product.id)}>Remove</button>
    </div>
  )
}

describe('CartContext', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.restoreAllMocks()
  })

  it('adds products, aggregates quantities, and persists the cart', async () => {
    const user = userEvent.setup()
    render(<CartProvider><CartConsumer /></CartProvider>)

    await user.click(screen.getByRole('button', { name: /add/i }))
    await user.click(screen.getByRole('button', { name: /add/i }))

    expect(screen.getByText('Items: 2')).toBeInTheDocument()
    expect(screen.getByText('Total: 118')).toBeInTheDocument()
    expect(screen.getByText('Lines: 1')).toBeInTheDocument()
    expect(JSON.parse(localStorage.getItem('platzi-cart'))[0].quantity).toBe(2)
  })

  it('removes a product line from the cart', async () => {
    const user = userEvent.setup()
    render(<CartProvider><CartConsumer /></CartProvider>)

    await user.click(screen.getByRole('button', { name: /add/i }))
    await user.click(screen.getByRole('button', { name: /remove/i }))

    expect(screen.getByText('Items: 0')).toBeInTheDocument()
  })
})
