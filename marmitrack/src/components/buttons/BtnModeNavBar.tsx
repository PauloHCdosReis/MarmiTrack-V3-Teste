import * as React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function BtnModeNavBar({
  setTheme,
}: {
  setTheme: (theme: string) => void
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="DarkMode" className="border-0">
        <AccordionTrigger className="font-univiaProUltra outline-none focus:outline-none h-10 px-3 rounded-md border-2 border-primary hover:bg-secondary">
          <span className="scale-100 dark:scale-0">Light Mode</span>
          <span className="absolute scale-0 dark:scale-100">Dark Mode</span>
          <span className="sr-only">Toggle theme</span>
        </AccordionTrigger>
        <AccordionContent>
          <ul className="items-center text-center mt-2 -mb-2 font-univiaProBold">
            <li
              onClick={() => {
                setTheme('light')
              }}
              className="cursor-pointer p-2 rounded-md hover:bg-primary"
            >
              Light Mode
            </li>
            <li
              onClick={() => {
                setTheme('dark')
              }}
              className="cursor-pointer p-2 rounded-md hover:bg-primary"
            >
              Dark Mode
            </li>
            <li
              onClick={() => {
                setTheme('system')
              }}
              className="cursor-pointer p-2 rounded-md hover:bg-primary"
            >
              System
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
