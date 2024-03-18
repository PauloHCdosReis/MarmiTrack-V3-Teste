import { Menu } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import SideBarRotas from './SideBarRotas'
import { HeadersType } from '../rotas'
import BtnSideBar from './BtnSideBar'
import { ModeToggle } from '@/components/buttons/ModeToggle'

export default function SideBar({ roles }: HeadersType) {
  return (
    <div className="w-12 flex flex-col justify-between min-h-screen h-screen max-h-screen rounded-md border-2 border-primary">
      <TooltipProvider delayDuration={0} skipDelayDuration={0}>
        <div className="flex flex-col justify-center items-center">
          <Tooltip key="marmitrack">
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
          </Tooltip>
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
