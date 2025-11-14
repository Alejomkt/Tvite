import React from 'react'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, total, clearCart } = useCart()

  if (items.length === 0) return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Carrito</h1>
      <p>Tu carrito está vacío.</p>
    </main>
  )

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl text-center font-bold mb-4">Carrito</h1>
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="bg-white p-4 rounded shadow flex items-center gap-4">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
            <div className="flex-1">
              <h2 className="font-semibold">{item.name}</h2>
              <div className="text-sm text-gray-600">${item.price.toFixed(2)} x {item.quantity}</div>
              <div className="mt-2 flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 border rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 border rounded">+</button>
                <button onClick={() => removeFromCart(item.id)} className="ml-4 text-sm text-red-600">Eliminar</button>
              </div>
            </div>
            <div className="font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <button onClick={() => clearCart()} className="text-sm text-red-600">Vaciar carrito</button>
        </div>
        <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
      </div>
    </main>
  )
}
