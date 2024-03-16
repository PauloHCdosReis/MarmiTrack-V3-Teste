import LoginForm from '@/components/forms/LoginForm'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

export default function Login() {
  return (
    <>
      <Card className="w-1/3 text-center justify-center items-center border-2 border-primary">
        <CardHeader>
          <CardTitle>MarmiTrack</CardTitle>
          <CardDescription>Login</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex flex-row gap-6">
          <Button variant={'secondary'} className="w-full" asChild>
            <Link href={'/cadastro'}>Cadastro</Link>
          </Button>
          <Button variant={'secondary'} className="w-full" asChild>
            <Link href={'/esquecisenha'}>Esqueci Senha</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}