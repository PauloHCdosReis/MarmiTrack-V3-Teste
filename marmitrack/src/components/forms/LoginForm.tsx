'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const loginFormScheme = z.object({
  S_USERNAME: z
    .string()
    .min(1, 'O username é obrigatório!')
    .max(30, 'O username deve ter no máximo 30 caracteres')
    .transform((S_USERNAME) => {
      return S_USERNAME.trim()
    }),
  S_SENHA: z
    .string()
    .min(1, 'A senha é obrigatória!')
    .max(100, 'A senha deve ter no máximo 100 caracteres'),
})

export type LoginFormData = z.infer<typeof loginFormScheme>

export default function LoginForm() {
  const [toggleSenha, setToggleSenha] = useState(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormScheme),
  })

  return (
    <form className="flex flex-col gap-4">
      <div className="text-left space-y-2">
        <Label htmlFor="S_USERNAME">Username</Label>
        <Input
          type="text"
          id="S_USERNAME"
          {...register('S_USERNAME')}
          autoComplete="off"
          className="border-2"
        />
      </div>
      <div className="text-left space-y-2">
        <Label htmlFor="S_SENHA">Senha</Label>
        <Input
          type="text"
          id="S_SENHA"
          {...register('S_SENHA')}
          autoComplete="off"
          className="border-2"
        />
      </div>
      <div className="space-y-2 mt-2">
        <Button className="w-full">Enviar</Button>
      </div>
    </form>
  )
}
