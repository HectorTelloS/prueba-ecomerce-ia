const API_BASE_URL = 'https://api.escuelajs.co'
const PRODUCTS_ENDPOINT = '/api/v1/products'
const PRODUCTS_ERROR_MESSAGE = 'Unable to fetch products'

export async function getProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}${PRODUCTS_ENDPOINT}`)

    if (!response.ok) {
      throw new Error(PRODUCTS_ERROR_MESSAGE)
    }

    return await response.json()
  } catch {
    throw new Error(PRODUCTS_ERROR_MESSAGE)
  }
}
