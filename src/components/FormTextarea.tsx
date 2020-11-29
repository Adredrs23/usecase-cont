import React, { FC } from 'react';

import { FormTextareaContainer } from '../constants/FormTextareaConstants';
import { FormTextareaPropsType } from '../interfaces/FormTextareaInterface';

const FormTextarea: FC<FormTextareaPropsType> = ({
  label,
  name,
  rows,
  cols,
  placeholder,
  value,
  setValue,
  ...rest
}) => {
  return (
    <FormTextareaContainer>
      <label htmlFor={name}>{label}</label>

      <textarea
        id={name}
        rows={rows}
        cols={cols}
        placeholder={placeholder || 'Comments here.'}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      >
        {value}
      </textarea>
    </FormTextareaContainer>
  );
};

export default FormTextarea;
