import NavBar from '@/components/headers/navBar/NavBar'
import SideBar from '@/components/headers/sideBar/SideBar'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from './loading'

export const metadata: Metadata = {
  title: 'MarmiTrack',
  description: 'Peça sua marmita',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const roles: Array<'COMMON_USER' | 'MANAGER' | 'ADMIN'> = [
    'COMMON_USER',
    'MANAGER',
    'ADMIN',
  ]

  return (
    <>
      <div className="hidden md:flex h-screen max-h-screen">
        <SideBar roles={roles} />
        <div className="h-screen max-h-screen w-wcalc max-w-wcalc overflow-hidden">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
      <div className="md:hidden flex flex-col h-screen max-h-screen overflow-hidden">
        <NavBar roles={roles} />
        <div className="flex-grow overflow-auto">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
    </>
  )
}
