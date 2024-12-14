import React from 'react'
import { useFormik } from 'formik';
import { AnyObject, object } from 'yup';
import { FormProps } from './form.types';
import { FormControl, FormHelperText, Stack } from '@mui/material';
import { LoadingButton } from '../LoadingButton';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Form = <T extends Record<string, any>>(props: FormProps<T>) => {
  const { onSubmit, data, fields, submitLabel, loading, readOnly, validation} = props;

  let validationSchema = validation;

  // TODO: use effect when need dynamic changes
  const fieldNames = Object.keys(fields);
  if (!validationSchema) {
    const yupObject = fieldNames.reduce((res, key) => {
      const field = fields[key]!;
      if(field.validation) {
        res[key] = field.validation;
      }
      return res;
    }, {} as AnyObject);

    validationSchema = object(yupObject);
  }

  const { values, errors, submitForm, setFieldValue } = useFormik<T>({
    onSubmit: onSubmit || console.log,
    initialValues: data || {} as T,
    enableReinitialize: true,
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
  });

  return (
    <Stack
      component="form"
      gap={2}
      direction={'column'}
    >
      {
        fieldNames.map((key: string) => {
          const field = fields[key]!;
          if (field.show && !field.show(values)) {
            return <></>;
          }

          return (
            <FormControl
              key={`form-${key}`}
              variant='standard'
            >
              {/* <InputLabel>{field.label} sdsd</InputLabel> */}
              <field.input
                label={field.label}
                placeholder={field.props?.placeholder}
                defaultValue={values[key] as T[keyof T]}
                readOnly={field.props?.readOnly}
                onChange={(val: T[keyof T])=>{
                  setFieldValue(key, val);
                }}
              />
              {
                errors && errors[key] && (
                  <FormHelperText error={!!errors}>{errors[key] as string}</FormHelperText>
                )
              }
            </FormControl>
          )
        })
      }
      {!readOnly && (
        <LoadingButton
          label={submitLabel || 'Submit'}
          loading={!!loading}
          size='large'
          onClick={submitForm}
        />
      )}
    </Stack>
  )
}
