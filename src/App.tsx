import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Types
type ComponentProps<Schema extends yup.ISchema<any>> = {
  defaultValues?: yup.InferType<Schema>;
};

// Schema definitions
const schemaRequiredOnly = yup.object({ required: yup.number().required() });
const schemaOptionalOnly = yup.object({ optional: yup.number().optional() });
const schemaBoth = yup.object({
  required: yup.number().required(),
  optional: yup.number().optional(),
});

// Components
const SchemaRequiredOnly = ({
  defaultValues,
}: ComponentProps<typeof schemaRequiredOnly>) => {
  useForm({
    defaultValues,
    resolver: yupResolver(schemaRequiredOnly),
  });

  return null;
};

const SchemaOptionalOnly = ({
  defaultValues,
}: ComponentProps<typeof schemaOptionalOnly>) => {
  useForm({
    defaultValues,
    resolver: yupResolver(schemaOptionalOnly), // <-- error
  });

  return null;
};

const SchemaBoth = ({ defaultValues }: ComponentProps<typeof schemaBoth>) => {
  useForm({
    defaultValues,
    resolver: yupResolver(schemaBoth), // <-- error
  });

  return null;
};

export default function App() {
  return (
    <>
      <SchemaBoth />
      <SchemaRequiredOnly />
      <SchemaOptionalOnly />
    </>
  );
}
