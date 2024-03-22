'use client'
import ModalMisturaEdit from '@/components/modal/ModalMisturaEdit'

export default async function MisturaEdit({ params }) {
  const data = params.id
  return (
    <ModalMisturaEdit>
      <h1>{data}</h1>
    </ModalMisturaEdit>
  )
}

/* <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border-2 border-primary">
        <Modal>{data}</Modal>
      </div>
    </div> */
