'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import BtnModePublic from './BtnModePublic'
import { useMount } from '@/hooks/useMount'
import BtnModeSideBar from './BtnModeSideBar'
import BtnModeNavBar from './BtnModeNavBar'

export function ModeToggle({
  type,
}: {
  type: 'sidebar' | 'navbar' | 'public'
}) {
  const { setTheme } = useTheme()
  const mouted = useMount()
  return (
    <>
      {mouted && (
        <>
          {type === 'public' && <BtnModePublic setTheme={setTheme} />}
          {type === 'sidebar' && <BtnModeSideBar setTheme={setTheme} />}
          {type === 'navbar' && <BtnModeNavBar setTheme={setTheme} />}
        </>
      )}
    </>
  )
}
/* 
'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const colorMap = {
    light: ['Orange', 'Red', 'Violet', 'Yellow', 'Blue', 'Green', 'Rose'],
    dark: ['Orange', 'Red', 'Violet', 'Yellow', 'Blue', 'Green', 'Rose'],
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme(`light`)}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(`dark`)}>
          Dark
        </DropdownMenuItem>
        <div className="flex dark:hidden">
          {colorMap.light.map((color) => (
            <DropdownMenuItem
              key={color}
              onClick={() => setTheme(`light${color}`)}
            >
              {color}
            </DropdownMenuItem>
          ))}
        </div>
        <div className="hidden dark:flex">
          {colorMap.light.map((color) => (
            <DropdownMenuItem
              className="dark:bg-slate-500"
              key={color}
              onClick={() => setTheme(`dark${color}`)}
            >
              {color}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
 */
