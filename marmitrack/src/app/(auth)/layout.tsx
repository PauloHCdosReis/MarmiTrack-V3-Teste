import { ModeToggle } from '@/components/buttons/ModeToggle'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from './loading'

export const metadata: Metadata = {
  title: 'MarmiTrack Auth',
  description: 'Peça sua marmita',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <div className="absolute bottom-3 right-3 md:bottom-5 lg:bottom-8 md:right-5 lg:right-8">
        <ModeToggle />
      </div>
    </div>
  )
}
