import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavitationButtonProps = {
  href: string
  text: string
  isOpen: boolean
  icon: LucideIcon
}

export default function NavitationButton({
  href,
  text,
  isOpen,
  icon: Icon,
}: NavitationButtonProps) {
  const pathName = usePathname()
  const active = pathName === href

  return (
    <li>
      <Link
        href={href}
        data-active={active}
        className="flex items-center border-l-[3px] border-transparent hover:bg-blue-400/10 text-secondary 
        hover:text-neutral w-full min-h-[3em] pl-4 data-[active=true]:text-neutral data-[active=true]:border-neutral
        data-[open=true]:justify-start lg:pl-6"
      >
        <div
          data-open={isOpen}
          className="flex items-center gap-6 lg:gap-4 data-[open=true]:translate-x-4 lg:data-[open=true]:translate-x-0 
          transition-transform duration-500"
        >
          <Icon className="min-w-[24px]" />
          <span
            data-open={isOpen}
            className="hidden text-xl whitespace-nowrap data-[open=true]:block"
          >
            {text}
          </span>
        </div>
      </Link>
    </li>
  )
}
