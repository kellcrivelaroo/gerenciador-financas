import * as React from 'react'

import { cn } from '@/lib/utils'
import CurrencyInputModel from './my-models/CurrencyInputModel'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const CurrencyInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <CurrencyInputModel
        type="text"
        placeholder="R$ 0,00"
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
CurrencyInput.displayName = 'Input'

export { CurrencyInput }
