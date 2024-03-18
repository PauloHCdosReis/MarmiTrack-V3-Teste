import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/buttons/ModeToggle'
import { Menu } from 'lucide-react'
import { HeadersType } from '../rotas'
import BtnNavSair from './BtnNavSair'
import NavBarRotas from './NavBarRotas'

export default function NavBar({ roles }: HeadersType) {
  return (
    <div className="flex flex-row justify-between py-1 px-1 border-b-2 bg-secondary border-primary">
      <Link
        href={'/'}
        className="text-xl rounded-md font-univiaProUltra outline-none focus:outline-none py-1 px-3 hover:bg-primary"
      >
        MarmiTrack
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="rounded-md py-1 px-2 border-none bg-secondary hover:bg-primary"
            size="icon"
            variant={'outline'}
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-between overflow-auto h-screen max-h-screen border-l-2 border-primary bg-background">
          <SheetHeader className="items-center justify-center">
            <SheetTitle className="font-univiaProUltra text-xl">
              MarmiTrack
            </SheetTitle>
          </SheetHeader>
          <div className="h-full">
            <NavBarRotas roles={roles} />
          </div>
          <SheetFooter>
            <div className="flex flex-col gap-2 w-full">
              <ModeToggle type="navbar" />
              <BtnNavSair />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
