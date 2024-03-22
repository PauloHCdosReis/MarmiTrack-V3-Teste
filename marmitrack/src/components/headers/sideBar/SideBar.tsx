import { Menu } from 'lucide-react'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import SideBarRotas from './SideBarRotas'
import { HeadersType } from '../rotas'
import BtnSideBar from './BtnSideBar'
import { ModeToggle } from '@/components/buttons/ModeToggle'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import BtnNavSair from '../navBar/BtnNavSair'
import NavBarRotas from '../navBar/NavBarRotas'

export default function SideBar({ roles }: HeadersType) {
  return (
    <div className="w-12 flex flex-col justify-between min-h-screen h-screen max-h-screen rounded-md border-2 border-primary">
      <TooltipProvider delayDuration={0} skipDelayDuration={0}>
        <div className="flex flex-col justify-center items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size={'icon'}
                className="w-full rounded-none rounded-t-md border-0 justify-center hover:border-b-2 hover:border-primary"
                variant="outline"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side={'left'}
              className="flex flex-col justify-between overflow-auto h-screen max-h-screen border-l-2 border-primary bg-background"
            >
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
          {/* <Tooltip key="marmitrack">
            <TooltipTrigger asChild>
              <Button
                size={'icon'}
                className="w-full rounded-none rounded-t-md border-0 justify-center hover:border-b-2 hover:border-primary"
                variant="outline"
              >
                <Link href={'/'}>
                  <Menu />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="bg-secondary font-univiaProUltra px-6"
            >
              <p>MarmiTrack</p>
            </TooltipContent>
          </Tooltip> */}
        </div>
        <div className="h-full my-4">
          <SideBarRotas roles={roles} />
        </div>
        <div className="flex flex-col justify-center gap-2 items-center">
          <ModeToggle type="sidebar" />
          <BtnSideBar />
        </div>
      </TooltipProvider>
    </div>
  )
}
