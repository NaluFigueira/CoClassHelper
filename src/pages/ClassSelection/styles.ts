import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  max-height: 100%;

  > strong {
    font-size: 18px;
  }

  > div {
    width: 100%;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: auto auto auto auto;
    padding: 10px;
  }
`;

export const Divider = styled.div`
  height: 1px !important;
  width: 20% !important;
  padding: 0 !important;
  margin-top: 5px;
  margin-bottom: 10px;
  background-color: ${lighten(0.2, '#9b9b9b')};
`;
