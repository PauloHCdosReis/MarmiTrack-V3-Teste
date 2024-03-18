import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import { Moon, Sun } from 'lucide-react'

export default function BtnModeSideBar({
  setTheme,
}: {
  setTheme: (theme: string) => void
}) {
  return (
    <Tooltip key="btnModeSideBar">
      <TooltipTrigger asChild>
        <Button
          size={'icon'}
          className="w-full rounded-none border-0 justify-center hover:border-y-2 hover:border-primary"
          variant="outline"
        >
          <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent
        side="right"
        className="bg-secondary font-univiaProUltra w-40"
      >
        <ul className="flex flex-col w-full justify-center text-center items-center">
          <li
            onClick={() => setTheme('light')}
            className={`cursor-pointer w-full p-1 rounded hover:bg-primary`}
          >
            Light
          </li>
          <li
            onClick={() => setTheme('dark')}
            className={`cursor-pointer w-full p-1 rounded hover:bg-primary`}
          >
            Dark
          </li>
          <li
            onClick={() => setTheme('system')}
            className={`cursor-pointer w-full p-1 rounded hover:bg-primary`}
          >
            System
          </li>
        </ul>
      </TooltipContent>
    </Tooltip>
  )
}
