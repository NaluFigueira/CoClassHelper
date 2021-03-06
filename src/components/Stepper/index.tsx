import React, { useState, useCallback, useEffect, useContext } from 'react';

import { Container, ArrowRight, StepTitle } from './styles';
import { StepperProps, StepNumber } from './types';
import SectionContext from '../../context/section';

const {
  SCHOOL_SELECTION,
  CLASS_SELECTION,
  ACTIVITY_SELECTION,
  STUDENT_LIST,
} = StepNumber;

const Stepper: React.FC<StepperProps> = ({
  onChangeStep,
  step = STUDENT_LIST,
}) => {
  const { selectedSchool, selectedClass, selectedActivity } = useContext(
    SectionContext,
  );
  const [stepNumber, setStepNumber] = useState<StepNumber>(step);

  useEffect(() => {
    setStepNumber(step);
  }, [step]);

  const HandleChangeStep = useCallback(
    (newStep: StepNumber) => {
      setStepNumber(newStep);
      onChangeStep(newStep);
    },
    [onChangeStep],
  );

  return (
    <Container>
      <div>
        <StepTitle isSelected={stepNumber === SCHOOL_SELECTION}>
          <h4 onClick={() => HandleChangeStep(SCHOOL_SELECTION)}>
            Selecione uma escola
          </h4>
          <h6>{selectedSchool?.name}</h6>
        </StepTitle>
        {stepNumber >= CLASS_SELECTION && (
          <>
            <ArrowRight />
            <StepTitle isSelected={stepNumber === CLASS_SELECTION}>
              <h4 onClick={() => HandleChangeStep(CLASS_SELECTION)}>
                Selecione uma turma
              </h4>
              <h6>{selectedClass?.name}</h6>
            </StepTitle>
          </>
        )}
        {stepNumber >= ACTIVITY_SELECTION && (
          <>
            <ArrowRight />
            <StepTitle isSelected={stepNumber === ACTIVITY_SELECTION}>
              <h4 onClick={() => HandleChangeStep(ACTIVITY_SELECTION)}>
                Selecione uma atividade
              </h4>
              <h6>{selectedActivity?.name}</h6>
            </StepTitle>
          </>
        )}
        {stepNumber === STUDENT_LIST && (
          <>
            <ArrowRight />
            <StepTitle isSelected>
              <h4 onClick={() => HandleChangeStep(STUDENT_LIST)}>
                Lista de entregas
              </h4>
            </StepTitle>
          </>
        )}
      </div>
    </Container>
  );
};

export default Stepper;
