import { Check } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface SuccessModalProps {
  timeout?: number
  content: string
}

export default function SuccessModal({
  timeout = 2000,
  content,
}: SuccessModalProps) {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, timeout)
  })

  return (
    <div
      className="min-h-screen min-w-[100vw] fixed top-0 left-0 bg-slate-800/30 backdrop-blur-sm
    flex items-center justify-center z-20 p-4"
    >
      <div
        className="bg-neutral rounded-lg flex flex-col justify-between divide-y divide-blue-700/20 py-2 px-3 lg:px-5
       drop-shadow-lg"
      >
        <header className="pl-2 p-1 flex gap-1 items-center text-sm text-blue-400">
          <Check />
          Sucesso
        </header>
        <span className="py-5 lg:py-8 pl-3 pr-8 text-base font-bold">
          {content}
        </span>
      </div>
    </div>
  )
}
