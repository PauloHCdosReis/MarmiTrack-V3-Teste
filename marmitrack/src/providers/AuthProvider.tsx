'use client'

import LoginAction, { SingInType } from '@/utils/action/LoginAction'
import { useState, createContext } from 'react'
import { toast } from 'sonner'

type AuthContextType = {
  isAuthenticated: boolean
  SingIn: (data: SingInType) => Promise<void>
  SingOff: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  async function SingIn({ S_USERNAME, S_SENHA }: SingInType) {
    const response = async () =>
      await new Promise((resolve, reject) => {
        LoginAction({ S_USERNAME, S_SENHA })
          .then(async (res) => {
            if (res.status === 200) {
              setIsAuthenticated(true)
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
    await fetch('/api/singoff', {
      method: 'GET',
    })
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, SingIn, SingOff }}>
      {children}
    </AuthContext.Provider>
  )
}
