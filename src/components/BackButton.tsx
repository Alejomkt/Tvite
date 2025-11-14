import React from 'react'
import { ArrowBack } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export default function BackButton() {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(-1)}
      className='fixed top-4 left-4 z-50 bg-white/70 rounded-full p-2 text-gray-700 hover:text-brand shadow-md transition-colors'
    >
      <ArrowBack />
    </button>
  )
}
