import styled from '@emotion/styled';

export const FormTextareaContainer = styled.div`
  width: 18rem;
  height: auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & > label {
    text-align: left;
    height: 1.5rem;
    font-size: 14px;
  }

  & > textarea {
    resize: none;

    :hover,
    :focus {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;
