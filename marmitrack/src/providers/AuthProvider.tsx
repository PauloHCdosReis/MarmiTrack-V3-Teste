'use client'

import LoginAction, { SingInType } from '@/utils/action/LoginAction'
import { useRouter } from 'next/navigation'
import { useState, createContext } from 'react'
import { toast } from 'sonner'

type AuthContextType = {
  isAuthenticated: boolean
  SingIn: (data: SingInType) => Promise<void>
  SingOff: () => Promise<void>
  RefreshToken: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  async function SingIn({ S_USERNAME, S_SENHA }: SingInType) {
    const response = async () =>
      await new Promise((resolve, reject) => {
        LoginAction({ S_USERNAME, S_SENHA })
          .then(async (res) => {
            if (res.status === 200) {
              setIsAuthenticated(true)
              router.push('/')
              resolve(res.message)
            } else {
              setIsAuthenticated(false)
            }
            reject(res.message)
          })
          .catch(() => {
            const message = 'Erro ao fazer login!'
            reject(message)
          })
      })

    toast.promise(response(), {
      loading: 'Carregando...',
      success: (message) => {
        return `${message}`
      },
      error: (error) => {
        return `${error}`
      },
    })
  }

  async function SingOff() {
    await fetch('http://localhost:3000/api/singoff', {
      method: 'GET',
    })
    router.refresh()
  }

  async function RefreshToken() {
    await fetch('http://localhost:3000/api/refreshtoken', {
      method: 'GET',
    })
    router.refresh()
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, SingIn, SingOff, RefreshToken }}
    >
      {children}
    </AuthContext.Provider>
  )
}
