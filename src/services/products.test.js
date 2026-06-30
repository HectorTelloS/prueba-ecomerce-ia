import { afterEach, describe, expect, it, vi } from 'vitest'
import { getProducts } from './products'

const mockProducts = [
  {
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
  },
]

describe('getProducts', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns products from the Platzi API products endpoint', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => mockProducts,
    })

    const products = await getProducts()

    expect(globalThis.fetch).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products')
    expect(products).toEqual(mockProducts)
  })

  it('throws a normalized error when the API response is not ok', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: false,
      status: 500,
    })

    await expect(getProducts()).rejects.toThrow('Unable to fetch products')
  })

  it('throws a normalized error when fetch fails', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('Network error'))

    await expect(getProducts()).rejects.toThrow('Unable to fetch products')
  })
})
