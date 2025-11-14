import productsData from '../data/products.json'
import { Product } from '../types/product'

export async function fetchProducts(): Promise<Product[]> {
  return productsData as Product[]
}

export async function fetchProductById(id: string): Promise<Product | undefined> {
  const products = await fetchProducts()
  return products.find(p => p.id === id)
}
