// src/services/api.js
export const API_BASE_URL = 'https://api.escuelajs.co/api/v1'

export async function request(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`)

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    return response.json()
  } catch (error) {
    throw new Error('No pudimos cargar los productos.', { cause: error })
  }
}
