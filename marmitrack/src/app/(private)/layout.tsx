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
  return <div className="">{children}</div>
}
