import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import { Input, InputProps } from '../Inputs/Input';

type Props = InputProps & {
  control: Control<any>;
  name: string;
  label: string;
  error?: FieldError;
}

import { Error } from './styles';

export function ControlledInput({ control, name, error, label, ...rest }: Props) {
  return (
    <>
      <Controller 
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input 
            onChangeText={onChange}
            value={value}
            label={label}
            {...rest}
          />
        )}
      />

      {
        error && <Error>{error.message}</Error>
      }

    </>
  )
}