import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100%;
  overflow-y: scroll;

  > strong {
    font-size: 18px;
  }

  table {
    width: 100%;
    text-align: center;

    input:focus {
      border: 1px solid ${darken(0.1, '#04BFBF')};
    }

    input[type='checkbox'] {
      transform: scale(1.5);
    }
  }
`;
