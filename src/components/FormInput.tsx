import React, { FC } from 'react';

import { FormInputContainer } from '../constants/FormInputConstants';
import { FormInputPropsType } from '../interfaces/FormInputInterface';

const FormInput: FC<FormInputPropsType> = ({
  label,
  name,
  stateValue,
  stateSetter,
  readOnly,
  ...rest
}) => {
  return (
    <FormInputContainer readOnly={readOnly}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        value={stateValue}
        readOnly={readOnly}
        onChange={(e): void => stateSetter(e.target.value)}
        {...rest}
      />
    </FormInputContainer>
  );
};

export default FormInput;
