import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { StepTileProps } from './types';

export const Container = styled.div`
  width: 80%;
  border: 2px solid ${lighten(0.3, '#9b9b9b')};
  border-radius: 4px;

  div {
    display: flex;
    align-items: center;

    svg {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;

export const StepTitle = styled.div<StepTileProps>`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isSelected &&
    css`
      border-bottom: 2px solid #04bfbf;
    `}
`;

export const ArrowRight = styled(MdKeyboardArrowRight).attrs({
  size: 32,
  color: lighten(0.2, '#9b9b9b'),
})``;
