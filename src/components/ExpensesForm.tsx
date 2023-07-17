'use client'
import { useState } from 'react'
import { cn, getTransactions, setTransactions } from '@/lib/utils'
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
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

import { useForm, SubmitHandler } from 'react-hook-form'
import SuccessDialog from './SuccessModal'
import { TransactionProps, transactionTypes } from '@/lib/interfaces'

export default function ExpensesForm() {
  const [success, setSuccess] = useState(false)
  const form = useForm<TransactionProps>()

  const transactions = getTransactions()

  const onSubmit: SubmitHandler<TransactionProps> = (data) => {
    data.tipo = transactionTypes.expense
    setTransactions(data, transactions)
    setSuccess(true)
  }

  return (
    <Form {...form}>
      {success && <SuccessDialog content="Despesa cadastrada com sucesso!" />}
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
                    <SelectItem value="alimentacao">Alimentação</SelectItem>
                    <SelectItem value="casa">Casa</SelectItem>
                    <SelectItem value="educacao">Educação</SelectItem>
                    <SelectItem value="lazer">Lazer</SelectItem>
                    <SelectItem value="pessoal">Pessoal</SelectItem>
                    <SelectItem value="saude">Saúde</SelectItem>
                    <SelectItem value="viagem">Viagem</SelectItem>
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

        {/* Pago */}
        <FormField
          control={form.control}
          name="pago"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Pago:</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-x-4 items-center"
                >
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="true" />
                    </FormControl>
                    <FormLabel>Sim</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="false" />
                    </FormControl>
                    <FormLabel>Não</FormLabel>
                  </FormItem>
                </RadioGroup>
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
