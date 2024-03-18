'use client'

import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { useFormStatus } from 'react-dom'

const ButtonSubmit = () => {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      className="w-full h-9 flex flex-row font-univiaProUltra"
      disabled={pending}
    >
      {pending === true ? (
        <>
          <Loader2 className="animate-spin" />
        </>
      ) : (
        'Enviar'
      )}
    </Button>
  )
}

export default ButtonSubmit
