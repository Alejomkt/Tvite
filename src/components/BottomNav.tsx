import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Home, ShoppingCart, Person, MoreVert } from '@mui/icons-material'
import { useCart } from '../context/CartContext'

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const { items = [] } = useCart()

  const totalItems = Array.isArray(items)
    ? items.reduce((acc, item) => acc + (item.quantity || 0), 0)
    : 0

  const navItems = [
    { path: '/', icon: <Home />, label: 'Home' },
    { path: '/cart', icon: <ShoppingCart />, label: 'Cart' },
    { path: '/profile', icon: <Person />, label: 'Profile' },
    { path: '/more', icon: <MoreVert />, label: 'More' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-md border-t border-gray-200 flex justify-evenly items-center py-2 animate-slide-up z-50">
      {navItems.map((item) => {
        const active = location.pathname === item.path
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`relative flex flex-col items-center justify-center gap-1 text-sm transition-colors duration-200 ${
              active ? 'text-brand' : 'text-gray-500'
            }`}
          >
            {item.label === 'Cart' ? (
              <div className="relative">
                <ShoppingCart />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-2 bg-brand text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                    {totalItems > 49 ? '50+' : totalItems}
                  </span>
                )}
              </div>
            ) : (
              item.icon
            )}
            <span>{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
