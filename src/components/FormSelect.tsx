import React, { FC } from 'react';

import { FormInputContainer } from '../constants/FormInputConstants';
import { FormSelectPropsType } from '../interfaces/FormSelectInterface';

const FormSelect: FC<FormSelectPropsType> = ({
  name,
  label,
  optionValues,
  value,
  setValue,
  ...rest
}) => {
  let optionsArray = optionValues.map(({ label, value }) => (
    <option value={value}>{label}</option>
  ));

  return (
    <FormInputContainer>
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      >
        {optionsArray}
      </select>
    </FormInputContainer>
  );
};

export default FormSelect;
