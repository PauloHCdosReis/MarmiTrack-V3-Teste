'use client'
import { usePathname } from 'next/navigation'
import { HeadersType, rotasAdmin, rotasCommon } from '../rotas'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { SheetClose } from '@/components/ui/sheet'
import Link from 'next/link'

export default function NavBarRotas({ roles }: HeadersType) {
  const router = usePathname()

  return (
    <div className="flex flex-col text-center justify-center gap-2">
      <SheetClose asChild>
        <Link
          href={'/'}
          className={`text-lg border-2 rounded-md border-primary p-1 outline-none focus:outline-none font-univiaProUltra hover:bg-secondary ${router === '/' ? 'bg-secondary' : ''}`}
        >
          Cardápio
        </Link>
      </SheetClose>
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-1"
      >
        {roles.includes('ADMIN') && (
          <AccordionItem value="ADMIN" className="border-0">
            <AccordionTrigger
              className={`font-univiaProUltra hover:no-underline outline-none focus:outline-none h-10 px-3 rounded-md border-2 border-primary hover:bg-secondary ${router.startsWith('/admin') ? 'bg-secondary' : ''}`}
            >
              Administração
            </AccordionTrigger>
            <AccordionContent>
              <ul className="items-center text-center mt-1 -mb-2 font-univiaProBold">
                {rotasAdmin.map((item) => (
                  <SheetClose asChild key={item.rota}>
                    <Link href={item.rota} key={item.rota} className="w-full">
                      <li
                        className={`outline-none focus:outline-none cursor-pointer flex flex-row justify-center p-2 rounded-md hover:bg-primary ${router === item.rota ? 'border-2 border-primary' : ''}`}
                      >
                        <span className="mr-2 h-2">{item.icon}</span>
                        <span>{item.text}</span>
                      </li>
                    </Link>
                  </SheetClose>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        )}
        <AccordionItem value="USER" className="border-0">
          <AccordionTrigger
            className={`font-univiaProUltra hover:no-underline outline-none focus:outline-none h-10 px-3 rounded-md border-2 border-primary hover:bg-secondary ${router.startsWith('/user') ? 'bg-secondary' : ''}`}
          >
            Usuário
          </AccordionTrigger>
          <AccordionContent>
            <ul className="items-center text-center mt-1 -mb-2 font-univiaProBold">
              {rotasCommon.map((item) => (
                <SheetClose asChild key={item.rota}>
                  <Link href={item.rota} key={item.rota} className="w-full">
                    <li
                      className={`outline-none focus:outline-none cursor-pointer flex flex-row justify-center p-2 rounded-md hover:bg-primary ${router === item.rota ? 'border-2 border-primary' : ''}`}
                    >
                      <span className="mr-2 h-2">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  </Link>
                </SheetClose>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
