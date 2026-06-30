// src/context/CartContext.jsx
import { createContext, useCallback, useContext, useMemo } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const CartContext = createContext(null)
const CART_STORAGE_KEY = 'platzi-cart'

export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage(CART_STORAGE_KEY, [])

  const addItem = useCallback((product) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [...currentItems, { ...product, quantity: 1 }]
    })
  }, [setItems])

  const removeItem = useCallback((productId) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== productId))
  }, [setItems])

  const clearCart = useCallback(() => setItems([]), [setItems])

  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0)

  const value = useMemo(
    () => ({ items, addItem, removeItem, clearCart, totalItems, totalPrice }),
    [items, addItem, removeItem, clearCart, totalItems, totalPrice],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
