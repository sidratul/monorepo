import { FormikHelpers } from 'formik';
import { FC } from 'react';
import { AnySchema } from 'yup';

export interface FormProps<T> {
  fields: FormFieldProps<T>;
  data?: T;
  onSubmit?: (data: T, helper: FormikHelpers<T>) => void;
  submitLabel?: string;
  loading?: boolean;
  readOnly?: boolean;
}

export type FormFieldProps<T> = Record<keyof T, FormField<T[keyof T], T>>;

export interface FormField<D, T> {
  // input: (props: Partial<InputProps<D>>) => React.JSX.Element;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  input: FC<any>,
  label?: string;
  validation?: AnySchema;
  props?: Partial<InputProps<D>>;
  show?: (data: T) => boolean;
}

export interface InputProps<D> {
  onChange: (data: D) => void;
  placeholder: string;
  defaultValue: D;
  readOnly: boolean;
  value: D;
}
