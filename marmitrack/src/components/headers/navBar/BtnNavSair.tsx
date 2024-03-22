'use client'

import { Button } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'
import { useAuthProvider } from '@/hooks/useAuthProvider'

export default function BtnNavSair() {
  const { SingOff } = useAuthProvider()

  return (
    <SheetClose asChild>
      <Button
        onClick={() => SingOff()}
        className="w-full font-univiaProUltra text-lg text-dark-text1 bg-primary"
        type="button"
      >
        Sair
      </Button>
    </SheetClose>
  )
}
