import { z } from 'zod'

export const transactionsFormSchema = z.object({
  data: z.date({
    required_error: 'Selecione uma data',
    invalid_type_error: 'Data inválida',
  }),
  categoria: z.string({ required_error: 'Selecione uma categoria' }),
  valor: z.preprocess(
    (v) => {
      const value = String(v)
      const noCurrencySymbleValue = String(value)
        .slice(3, String(value).length)
        .replace('.', '')
        .replace(',', '.')

      return Number(noCurrencySymbleValue)
    },
    z
      .number({ invalid_type_error: 'Valor inválido' })
      .positive('O valor deve ser maior que R$ 0,00'),
  ),
  descricao: z
    .string({
      required_error: 'Digite uma descrição para a transação',
      invalid_type_error: 'Descrição inválida',
    })
    .min(3, 'A descrição deve conter no mínimo 3 dígitos'),
  pago: z.optional(
    z.string({
      required_error: 'Selecione uma opção',
      invalid_type_error: 'Opção inválida',
    }),
  ),
})
