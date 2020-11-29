import React, { FC, useState } from 'react';

import {
  FormContainerDiv,
  GridContainerDiv,
} from '../constants/FormContainerConstants';

import FormSelect from './FormSelect';
import FormTextarea from './FormTextarea';

const FormContainer: FC = ({ children }) => {
  const [comment, setComment] = useState('');
  const [dd, setDd] = useState('');

  return (
    <FormContainerDiv>
      <GridContainerDiv></GridContainerDiv>
      <GridContainerDiv>{children}</GridContainerDiv>
      <GridContainerDiv>
        <FormSelect
          label='check'
          name='check'
          value={dd}
          setValue={setDd}
          optionValues={[
            { label: 'CAt', value: 'CAt' },
            { label: 'sad', value: 'CasdAt' },
            { label: 'asd', value: 'hd' },
          ]}
        />
      </GridContainerDiv>
      <GridContainerDiv>
        <FormTextarea
          name='comment'
          label='Comment'
          rows={6}
          value={comment}
          setValue={setComment}
        />
      </GridContainerDiv>
    </FormContainerDiv>
  );
};

export default FormContainer;
