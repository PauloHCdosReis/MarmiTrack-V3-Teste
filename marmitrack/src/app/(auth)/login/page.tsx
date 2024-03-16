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

export default async function Login() {
  return (
    <>
      <Card className="w-1/4 text-center justify-center items-center border-2 border-primary">
        <CardHeader>
          <CardTitle>MarmiTrack</CardTitle>
          <CardDescription>Login</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex flex-col md:flex-row gap-6">
          <Button
            variant={'link'}
            className="w-full underline hover:border-2 hover:border-primary"
            asChild
          >
            <Link href={'/cadastro'}>Cadastro</Link>
          </Button>
          <Button
            variant={'link'}
            className="w-full underline hover:border-2 hover:border-primary"
            asChild
          >
            <Link href={'/esquecisenha'}>Esqueci Senha</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}
