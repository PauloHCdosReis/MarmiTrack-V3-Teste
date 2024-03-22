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
      <Card className="w-11/12 md:w-1/2 lg:w-4/12 2xl:w-1/4 flex text-center justify-center flex-col rounded-lg border-2 border-primary">
        <CardHeader>
          <CardTitle className="font-univiaProUltra">MarmiTrack</CardTitle>
          <CardDescription className="font-univiaProUltra text-lg">
            Login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex flex-col md:flex-row gap-2 font-univiaProUltra">
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
