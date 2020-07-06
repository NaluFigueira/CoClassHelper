import React, { useContext } from 'react';
import Stepper from '../../components/Stepper';
import { StepNumber } from '../../components/Stepper/types';
import SchoolSelection from '../SchoolSelection';
import ClassSelection from '../ClassSelection';
import ActivitySelection from '../ActivitySelection';
import StudentsList from '../StudentsList';
import SectionContext from '../../context/section';

import { Container, SectionContainer } from './styles';

const {
  SCHOOL_SELECTION,
  CLASS_SELECTION,
  ACTIVITY_SELECTION,
  STUDENT_LIST,
} = StepNumber;

const SectionController: React.FC = () => {
  const { stepNumber, HandleChangeStep } = useContext(SectionContext);

  return (
    <Container>
      <Stepper onChangeStep={HandleChangeStep} step={stepNumber} />
      <SectionContainer>
        {stepNumber === SCHOOL_SELECTION && <SchoolSelection />}
        {stepNumber === CLASS_SELECTION && <ClassSelection />}
        {stepNumber === ACTIVITY_SELECTION && <ActivitySelection />}
        {stepNumber === STUDENT_LIST && <StudentsList />}
      </SectionContainer>
    </Container>
  );
};

export default SectionController;
