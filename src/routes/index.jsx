// src/routes/index.jsx
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { Cart } from '../pages/Cart/Cart'
import { Home } from '../pages/Home/Home'
import { ProductDetail } from '../pages/ProductDetail/ProductDetail'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'cart', element: <Cart /> },
      { path: 'products/:id', element: <ProductDetail /> },
    ],
  },
])
