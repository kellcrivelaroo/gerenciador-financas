import { ElementType } from 'react'

interface ModalProps {
  Icon?: ElementType
  title: string
}

export default function ModalHeader({ Icon, title }: ModalProps) {
  return (
    <header className="pl-2 p-1 flex gap-1 items-center text-sm text-blue-400">
      {Icon && <Icon />}
      {title}
    </header>
  )
}
