import React from 'react'
import { useProducts } from '../hooks/useProducts'
import ProductGrid from '../components/ProductGrid'

export default function Home() {
  const { products, loading } = useProducts()
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl text-center font-bold mb-4">Productos</h1>
      {loading ? <div>Cargando...</div> : <ProductGrid products={products} />}
    </main>
  )
}
