import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

interface ModalProps {
  children: ReactNode
  timeout?: number
}

export default function ModalRoot({ children, timeout = 1500 }: ModalProps) {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, timeout)
  })

  return (
    <div
      className="min-h-screen min-w-[100vw] fixed inset-0 bg-slate-800/30 backdrop-blur-sm
flex items-center justify-center z-50 p-4"
    >
      <div
        className="bg-neutral rounded-lg flex flex-col justify-between divide-y divide-blue-700/20 py-2 px-3 lg:px-5
   drop-shadow-lg"
      >
        {children}
      </div>
    </div>
  )
}
