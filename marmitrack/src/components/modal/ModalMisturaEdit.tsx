import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef } from 'react'

export default function ModalMisturaEdit({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const overlay = useRef<HTMLDivElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        onDismiss()
      }
    },
    [onDismiss, overlay, wrapper],
  )

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss()
    },
    [onDismiss],
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  return (
    <div
      ref={overlay}
      onClick={onClick}
      className="fixed z-50 left-0 top-0 w-full h-full bg-black/40 flex items-center justify-center"
    >
      <div
        ref={wrapper}
        onClick={onClick}
        className="relative bg-background shadow-lg rounded-lg p-6"
      >
        {children}
      </div>
    </div>
  )
}
