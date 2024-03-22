import { GroupAdm } from '@/utils/Auth'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MarmiTrack ADM',
  description: 'MarmiTrack: Administração',
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  await GroupAdm()
  return <>{children}</>
}
