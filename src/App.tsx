import React from 'react'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import BottomNav from './components/BottomNav'
import BackButton from './components/BackButton'
import { CartProvider } from './context/CartContext'

function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className='min-h-screen bg-white text-gray-900 flex flex-col'>
      {!isHome && <BackButton />}
      <main className='flex-1 pb-16'>
        <AppRoutes />
      </main>
        <BottomNav />
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Layout />
      </Router>
    </CartProvider>
  )
}
