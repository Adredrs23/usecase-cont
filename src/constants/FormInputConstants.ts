import styled from '@emotion/styled';

import { InputProp } from '../interfaces/FormInputInterface';

export const FormInputContainer = styled.div<InputProp>`
  width: 100%;
  height: 60px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;

  & > label {
    text-align: left;
    height: 1.5rem;
    font-size: 12px;
  }

  & > input,
  & > select {
    height: 30px;
    padding: 0 5px;
    font-size: 16px;
    border: none;
    border-radius: inherit;
    outline: none;
    cursor: ${(props) => (props.readOnly ? 'default' : 'text')};
    border: ${(props) =>
      props.readOnly ? 'none' : '1px solid rgba(0, 0, 0, 0.2)'};

    // background-color: ${(props) =>
      props.readOnly ? 'none' : 'rgba(0, 0, 0, 0.1)'}
    // background-color: rgba(0, 0, 0, 0.1);

    :hover,
    :focus {
      background-color: ${(props) =>
        props.readOnly ? 'none' : 'rgba(0, 0, 0, 0.2)'};
    }
  }

  & > select {
    cursor: ${(props) => (props.readOnly ? 'default' : 'pointer')};
  }
`;


