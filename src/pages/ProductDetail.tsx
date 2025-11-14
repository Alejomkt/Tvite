import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../types/product'
import { fetchProductById } from '../api/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const { addToCart } = useCart()

  useEffect(() => {
    if (!id) return
    fetchProductById(id).then(p => p ? setProduct(p) : setProduct(null))
  }, [id])

  if (!product) return <div className="container mx-auto px-4 py-8">Producto no encontrado</div>

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded" />
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <div className="mt-4 text-xl font-semibold">${product.price.toFixed(2)}</div>
          <div className="mt-6">
            <button className="bg-primary text-white px-4 py-2 rounded" onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </main>
  )
}
