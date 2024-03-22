'use client'
import { AuthContext } from '@/providers/AuthProvider'
import { useContext } from 'react'

export const useAuthProvider = () => {
  const { isAuthenticated, SingIn, SingOff, RefreshToken } =
    useContext(AuthContext)
  return { isAuthenticated, SingIn, SingOff, RefreshToken }
}
