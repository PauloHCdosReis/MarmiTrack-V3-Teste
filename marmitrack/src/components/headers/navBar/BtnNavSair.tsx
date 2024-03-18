import { Button } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'

export default function BtnNavSair() {
  return (
    <SheetClose asChild>
      <Button
        className="w-full font-univiaProUltra text-lg text-dark-text1 bg-primary"
        type="button"
      >
        Sair
      </Button>
    </SheetClose>
  )
}
