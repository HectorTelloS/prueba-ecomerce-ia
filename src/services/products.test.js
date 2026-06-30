import { describe, expect, it, vi, afterEach } from 'vitest'
import { getProductById, getProducts } from './products'

const product = {
  id: 1,
  title: 'Classic Shoes',
  price: 59,
  description: 'Comfortable shoes',
  images: ['https://example.com/shoes.jpg'],
  category: { id: 4, name: 'Shoes', image: 'https://example.com/category.jpg' },
}

describe('products service', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('fetches products from the Platzi products endpoint', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => [product],
    })

    await expect(getProducts()).resolves.toEqual([product])
    expect(fetchMock).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products?offset=0&limit=12')
  })

  it('fetches one product by id', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => product,
    })

    await expect(getProductById(1)).resolves.toEqual(product)
    expect(fetchMock).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products/1')
  })

  it('throws a friendly error when the API response fails', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, status: 500 })

    await expect(getProducts()).rejects.toThrow('No pudimos cargar los productos.')
  })
})
