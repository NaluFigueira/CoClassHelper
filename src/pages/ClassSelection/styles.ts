import styled from 'styled-components';

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
