import { Github, Instagram, Linkedin, FileCode2 } from 'lucide-react'
import flame from '@/public/flame-logo.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="pl-[60px] lg:pl-0 flex border-t border-border justify-center h-16 gap-8 items-center text-700">
      <a
        href="https://github.com/kellcrivelaroo"
        target="_blank"
        rel="noreferrer"
        className="transition-colors duration-300 hover:text-blue-500"
      >
        <Github />
      </a>
      <a
        href="https://kellcrivelaro.com.br"
        target="_blank"
        rel="noreferrer"
        className="transition-colors duration-300 hover:text-blue-500"
      >
        <FileCode2 />
      </a>
      <a
        href="https://www.linkedin.com/in/kellcrivelaro"
        target="_blank"
        rel="noreferrer"
        className="transition-colors duration-300 hover:text-blue-500"
      >
        <Linkedin />
      </a>
      <a
        href="https://instagram.com/kellcrivelaro"
        target="_blank"
        rel="noreferrer"
        className="transition-colors duration-300 hover:text-blue-500"
      >
        <Instagram />
      </a>
      <a href="https://flametecnologia.com.br" target="_blank" rel="noreferrer">
        <Image
          src={flame}
          alt="Flame Tecnologia"
          width={24}
          className="hover:brightness-125 transition-all duration-300"
        />
      </a>
    </div>
  )
}
