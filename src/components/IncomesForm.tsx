'use client'
import { useState } from 'react'
import { cn, getLocalStorage } from '@/lib/utils'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Calendar } from '@/components/ui/calendar'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Form,
  FormMessage,
} from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import SuccessDialog from './SuccessModal'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IncomeProps } from '@/lib/interfaces'

export default function IncomesForm() {
  const [success, setSuccess] = useState(false)
  const form = useForm<IncomeProps>()

  const incomes = getLocalStorage('incomes')

  const onSubmit: SubmitHandler<IncomeProps> = (data) => {
    const newIncome = {
      ...data,
    }
    const uptatedIncomes = [...incomes, newIncome]
    localStorage.setItem('incomes', JSON.stringify(uptatedIncomes))
    setSuccess(true)
  }

  return (
    <Form {...form}>
      {success && <SuccessDialog content="Receita cadastrada com sucesso!" />}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* Data */}
        <FormField
          control={form.control}
          name="data"
          render={({ field }) => (
            <FormItem className="flex flex-col flex-nowrap">
              <FormLabel>Data</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      className={cn(
                        'w-full lg:w-[240px] pl-3 text-left font-normal bg-neutral text-blue-900 hover:bg-neutral border-border border',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'dd/MM/yyyy')
                      ) : (
                        <span>Selecione uma data</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Categoria */}
        <FormField
          control={form.control}
          name="categoria"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-full lg:w-[240px] font-medium bg-neutral">
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-slate-500 font-medium">
                      Categoria
                    </SelectLabel>
                    <SelectItem value="salario">Salário</SelectItem>
                    <SelectItem value="receita-variavel">
                      Receita variável
                    </SelectItem>
                    <SelectItem value="investimento">Investimento</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        {/* Valor */}
        <FormField
          control={form.control}
          name="valor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Descrição */}
        <FormField
          control={form.control}
          name="descricao"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Cadastrar Despesa</Button>
      </form>
    </Form>
  )
}
