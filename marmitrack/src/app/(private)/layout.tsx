import NavBar from '@/components/headers/NavBar'
import SideBar from '@/components/headers/SideBar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MarmiTrack',
  description: 'Peça sua marmita',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="hidden md:flex">
        <SideBar />
        <div className="min-h-screen max-h-screen min-w-full max-w-full overflow-hidden">
          {children}
        </div>
      </div>
      <div className="md:hidden flex flex-col h-screen">
        <NavBar />
        <div className="flex-grow">{children}</div>
      </div>
    </>
  )
}
