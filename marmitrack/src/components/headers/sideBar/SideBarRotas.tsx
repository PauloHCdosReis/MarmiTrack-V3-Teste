'use client'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { CreditCard, Home, UserCog } from 'lucide-react'
import Link from 'next/link'
import { HeadersType, rotasAdmin, rotasCommon } from '../rotas'
import { usePathname } from 'next/navigation'

export default function SideBarRotas({ roles }: HeadersType) {
  const router = usePathname()
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Tooltip key={'home'}>
        <TooltipTrigger asChild>
          <Button
            size={'icon'}
            className={`w-full rounded-none border-0 justify-center ${router === '/' ? 'bg-secondary' : ''} hover:border-y-2 hover:border-primary`}
            variant="outline"
          >
            <Link href={'/'}>
              <Home />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          className="bg-secondary font-univiaProUltra px-8"
        >
          <p>Cardápio</p>
        </TooltipContent>
      </Tooltip>
      {roles.includes('COMMON_USER') && (
        <Tooltip key="user">
          <TooltipTrigger asChild>
            <Button
              size={'icon'}
              className={`w-full rounded-none border-0 justify-center ${router.startsWith('/user') ? 'bg-secondary' : ''} hover:border-y-2 hover:border-primary`}
              variant="outline"
            >
              <UserCog />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            align="center"
            className="bg-secondary font-univiaProUltra px-1"
          >
            <ul className="flex flex-col">
              {rotasCommon.map((item) => (
                <Link key={item.text} href={item.rota}>
                  <li
                    className={`flex flex-row w-full p-1 px-3 rounded hover:bg-primary ${router === item.rota ? 'border-2 border-primary bg-background' : ''}`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </TooltipContent>
        </Tooltip>
      )}
      {roles.includes('ADMIN') && (
        <Tooltip key="adm">
          <TooltipTrigger asChild>
            <Button
              size={'icon'}
              className={`w-full rounded-none border-0 justify-center ${router.startsWith('/admin') ? 'bg-secondary' : ''} hover:border-y-2 hover:border-primary`}
              variant="outline"
            >
              <CreditCard />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            align="start"
            className="bg-secondary font-univiaProUltra px-1"
          >
            <ul className="flex flex-col">
              {rotasAdmin.map((item) => (
                <Link key={item.text} href={item.rota}>
                  <li
                    className={`flex flex-row w-full p-1 px-3 rounded hover:bg-primary ${router === item.rota ? 'border-2 border-primary bg-background' : ''}`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  )
}
