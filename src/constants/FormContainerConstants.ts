import styled from '@emotion/styled';

import { GridProps } from '../interfaces/GridContainerTypes';

export const FormContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: cyan;
  width: 60%;
  height: 40%;
`;

export const GridContainerDiv = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.gtc ? props.gtc : 'repeat(3,1fr)'};
  grid-wrap: wrap;
`;
