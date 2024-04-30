'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  type FieldErrors,
  type FieldValues,
  type UseFormRegister,
  useForm,
} from 'react-hook-form';
import type { z } from 'zod';

/**
 * AuthFormProps is a generic type that defines the props for the Form component.
 */
type AuthFormProps<TField extends FieldValues> = {
  /**
   * The Zod schema for the form data.
   */
  // biome-ignore lint/complexity/noBannedTypes: <explanation>
  schema: z.ZodObject<{}, 'strip', z.ZodTypeAny, TField, TField>;

  /**
   * The function to call when the form is submitted.
   * @param data - The form data to submit.
   * @returns void
   */
  onSubmit: (data: TField) => void;

  /**
   * Optional additional JSX elements to include in the form.
   */
  children?: React.ReactNode;

  /**
   * Optional function to render each field in the form.
   * @param info - The information about the field to render.
   * @returns JSX.Element - The field component.
   */
  renderFormField?: (info: {
    fieldName: keyof TField;
    formErrors: FieldErrors<TField>;
    formRegister: UseFormRegister<TField>;
  }) => JSX.Element;
};

/**
 * AuthForm is a generic form component for handling authentication.
 * It uses the useForm hook from react-hook-form to manage form state and validation.
 * The form fields and validation rules are defined by the schema prop.
 * The form submission is handled by the onSubmit prop.
 * Additional JSX elements can be included in the form via the children prop.
 * Each field in the form is rendered by a function passed to the renderFormField prop.
 *
 * @param {Object} props - The properties to configure the form.
 * @param {Function} props.onSubmit - The function to call when the form is submitted.
 * @param {Object} props.schema - The Zod schema for the form data.
 * @param {React.ReactNode} props.children - Optional additional JSX elements to include in the form.
 * @param {Function} props.renderFormField - Optional function to render each field in the form.
 * @returns {JSX.Element} - The AuthForm component.
 */
export default function AuthForm<TField extends FieldValues>({
  onSubmit,
  schema,
  children,
  renderFormField,
}: AuthFormProps<TField>): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  /**
   * Get the field names from the schema.
   */
  const formFields = Object.keys(schema.shape);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-4">
        {formFields.map((fieldName: string) =>
          renderFormField
            ? renderFormField({
                fieldName,
                formErrors: errors,
                formRegister: register,
              })
            : null,
        )}
        {children}
      </div>
    </form>
  );
}
