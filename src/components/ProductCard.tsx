import React from 'react'
import { Product } from '../types/product'
import Button from './UI/Button'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      </Link>
      <h3 className="mt-3 font-semibold text-lg">{product.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{product.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-lg font-bold">${product.price.toFixed(2)}</div>
        <Button onClick={() => addToCart(product)}>Agregar</Button>
      </div>
    </div>
  )
}
