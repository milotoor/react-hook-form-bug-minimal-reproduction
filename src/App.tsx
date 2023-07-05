import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type Schema = yup.InferType<typeof schema>
type ComponentProps = {
  defaultValues?: Schema
}

const schema = yup
  .object({
    required: yup.number().required(),
    optional: yup.number().optional(),
  })
  .required()

const App = ({ defaultValues }: ComponentProps) => {
  useForm({
    defaultValues,
    mode: 'all',
    resolver: yupResolver(schema),
  })

  return null
}

export default App
