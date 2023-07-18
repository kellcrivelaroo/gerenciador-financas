import React from 'react'

interface ModalProps {
  text: string
}

export default function ModalContent({ text }: ModalProps) {
  return (
    <span className="py-5 lg:py-8 pl-3 pr-8 text-base font-bold">{text}</span>
  )
}
