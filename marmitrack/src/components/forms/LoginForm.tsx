'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Eye, EyeOff } from 'lucide-react'
import ButtonSubmit from '../buttons/ButtonSubmit'
import { useAuthProvider } from '@/hooks/useAuthProvider'

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormScheme),
  })
  const { SingIn } = useAuthProvider()

  return (
    <form
      className="flex flex-col gap-4"
      // @ts-expect-error: tipagem está correta.
      action={handleSubmit(SingIn)}
    >
      <div className="text-left space-y-2">
        <Label htmlFor="S_USERNAME">Username</Label>
        <Input
          type="text"
          id="S_USERNAME"
          {...register('S_USERNAME')}
          autoComplete="off"
          className="border-2 hover:border-primary"
        />
        {errors.S_USERNAME && (
          <span className="text-sm text-red-500">
            {errors.S_USERNAME.message}
          </span>
        )}
      </div>
      <div className="text-left space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="S_SENHA">Senha</Label>
          <div className="text-sm mr-3">
            <a
              className="font-semibold cursor-pointer"
              onClick={() => setToggleSenha((toggleSenha) => !toggleSenha)}
            >
              {toggleSenha ? <Eye /> : <EyeOff />}
            </a>
          </div>
        </div>
        <Input
          type={toggleSenha ? 'text' : 'password'}
          id="S_SENHA"
          {...register('S_SENHA')}
          autoComplete="off"
          className="border-2 hover:border-primary"
        />
        {errors.S_SENHA && (
          <span className="text-sm text-red-500">{errors.S_SENHA.message}</span>
        )}
      </div>
      <div className="space-y-2 mt-2">
        <ButtonSubmit />
      </div>
    </form>
  )
}
