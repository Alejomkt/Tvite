import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import CartPage from '../pages/CartPage'
import ProfilePage from '../pages/ProfilePage'
import MorePage from '../pages/MorePage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<ProductDetail />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/more' element={<MorePage />} />
    </Routes>
  )
}
