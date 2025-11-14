import React from 'react'

export default function Button({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
  return (
    <button onClick={onClick} className="bg-primary text-blue-800 px-3 py-1 rounded hover:opacity-90">
      {children}
    </button>
  )
}
