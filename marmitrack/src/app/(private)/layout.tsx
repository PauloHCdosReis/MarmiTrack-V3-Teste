import NavBar from '@/components/headers/navBar/NavBar'
import SideBar from '@/components/headers/sideBar/SideBar'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from './loading'
import { Session } from '@/utils/Auth'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'MarmiTrack',
  description: 'Peça sua marmita',
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await Session()
  if (session === false) {
    redirect('/login')
    return null
  }

  return (
    <>
      <div className="hidden md:flex h-screen max-h-screen">
        <SideBar roles={session.roles} />
        <div className="h-screen max-h-screen w-wcalc max-w-wcalc overflow-hidden">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
      <div className="md:hidden flex flex-col h-screen max-h-screen overflow-hidden">
        <NavBar roles={session.roles} />
        <div className="flex-grow overflow-auto">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
    </>
  )
}
