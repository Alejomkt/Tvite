import React, { createContext, useContext, useEffect, useState } from 'react'
import { Product } from '../types/product'

export interface CartItem extends Product { quantity: number }

interface CartContextValue {
  items: CartItem[]
  addToCart: (product: Product, qty?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, qty: number) => void
  clearCart: () => void
  total: number
  itemCount: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem('cart')
      return raw ? JSON.parse(raw) : []
    } catch { return [] }
  })

  useEffect(() => { localStorage.setItem('cart', JSON.stringify(items)) }, [items])

  const addToCart = (product: Product, qty = 1) => {
    setItems(prev => {
      const exists = prev.find(i => i.id === product.id)
      if (exists) return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + qty } : i)
      return [...prev, { ...product, quantity: qty }]
    })
  }

  const removeFromCart = (productId: string) => setItems(prev => prev.filter(i => i.id !== productId))
  const updateQuantity = (productId: string, qty: number) => { if (qty <= 0) return removeFromCart(productId); setItems(prev => prev.map(i => i.id === productId ? { ...i, quantity: qty } : i)) }
  const clearCart = () => setItems([])

  const total = items.reduce((s, i) => s + i.price * i.quantity, 0)
  const itemCount = items.reduce((s, i) => s + i.quantity, 0)

  return <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, total, itemCount }}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>')
  return ctx
}
