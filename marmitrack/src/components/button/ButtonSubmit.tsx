import { Button } from '@/components/ui/button'
import Link from 'next/link'

type ButtonSubmitType = {
  btn: string
  href: string
}

const ButtonSubmit = ({ btn, href }: ButtonSubmitType) => {
  return (
    <Button /* asChild */ variant={'default'} className="w-full" type="submit">
      Enviar
      {/* <Link href={href}>{btn}</Link> */}
    </Button>
  )
}

export default ButtonSubmit
