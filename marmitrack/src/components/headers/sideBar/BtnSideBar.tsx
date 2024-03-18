'use client'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import { ArrowRightFromLine } from 'lucide-react'
import Link from 'next/link'

export default function BtnSideBar() {
  return (
    <Tooltip key="sair">
      <TooltipTrigger asChild>
        <Button
          size={'icon'}
          className="w-full rounded-none rounded-b-md border-0 justify-center hover:border-t-2 hover:border-primary"
          variant="outline"
        >
          <Link href={'/'}>
            <ArrowRightFromLine />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent
        side="right"
        className="bg-secondary font-univiaProUltra px-8"
      >
        <p>Sair</p>
      </TooltipContent>
    </Tooltip>
  )
}
