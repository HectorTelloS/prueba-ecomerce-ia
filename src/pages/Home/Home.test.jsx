import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { CartProvider } from '../../context/CartContext'
import { Home } from './Home'

const products = [
  {
    id: 1,
    title: 'Classic Shoes',
    price: 59,
    description: 'Comfortable shoes',
    images: ['https://example.com/shoes.jpg'],
    category: { id: 4, name: 'Shoes' },
  },
]

describe('Home page', () => {
  beforeEach(() => localStorage.clear())
  afterEach(() => vi.restoreAllMocks())

  it('shows loading, renders products, and adds an item to cart', async () => {
    const user = userEvent.setup()
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: true, json: async () => products })

    render(<MemoryRouter><CartProvider><Home /></CartProvider></MemoryRouter>)

    expect(screen.getByText(/cargando productos/i)).toBeInTheDocument()
    expect(await screen.findByText('Classic Shoes')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /agregar al carrito/i }))
    await waitFor(() => expect(JSON.parse(localStorage.getItem('platzi-cart'))[0].quantity).toBe(1))
  })

  it('shows an accessible error message when products fail', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, status: 500 })

    render(<MemoryRouter><CartProvider><Home /></CartProvider></MemoryRouter>)

    expect(await screen.findByRole('alert')).toHaveTextContent('No pudimos cargar los productos.')
  })
})
