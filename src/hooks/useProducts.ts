import { useEffect, useState } from 'react'
import { Product } from '../types/product'
import { fetchProducts } from '../api/products'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    fetchProducts().then(data => {
      if (mounted) setProducts(data)
    }).finally(() => { if (mounted) setLoading(false) })

    return () => { mounted = false }
  }, [])

  return { products, loading }
}
