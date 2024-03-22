import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { AuthProvider } from '@/providers/AuthProvider'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'MarmiTrack',
  description: 'Site interno para pedir marmita',
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            {children}
            {modal}
          </AuthProvider>
          <Toaster
            position="top-right"
            expand={false}
            richColors={true}
            visibleToasts={8}
            closeButton={true}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
