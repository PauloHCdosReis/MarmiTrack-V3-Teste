import { ModeToggle } from '@/components/buttons/ModeToggle'
import type { Metadata } from 'next'

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
      {children}
      <div className="fixed bottom-8 right-8">
        <ModeToggle />
      </div>
    </div>
  )
}
