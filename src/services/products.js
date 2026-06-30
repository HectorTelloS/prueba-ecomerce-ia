// src/services/products.js
import { request } from './api'

export function getProducts({ offset = 0, limit = 12 } = {}) {
  return request(`/products?offset=${offset}&limit=${limit}`)
}

export function getProductById(id) {
  return request(`/products/${id}`)
}
