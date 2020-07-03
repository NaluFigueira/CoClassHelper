import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const SectionContainer = styled.div`
  width: 80%;
  max-height: 70%;
  border: 2px solid ${lighten(0.3, '#9b9b9b')};
  border-radius: 4px;
`;
