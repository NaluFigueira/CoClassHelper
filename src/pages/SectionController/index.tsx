import React, { useState } from 'react';
import Stepper from '../../components/Stepper';
import { StepNumber } from '../../components/Stepper/types';
import SchoolSelection from '../SchoolSelection';
import ClassSelection from '../ClassSelection';
import ActivitySelection from '../ActivitySelection';
import StudentsList from '../StudentsList';

import { Container, SectionContainer } from './styles';

const {
  SCHOOL_SELECTION,
  CLASS_SELECTION,
  ACTIVITY_SELECTION,
  STUDENT_LIST,
} = StepNumber;

const SectionController: React.FC = () => {
  const [step, setStep] = useState<StepNumber>(STUDENT_LIST);

  return (
    <Container>
      <Stepper onChangeStep={setStep} step={step} />
      <SectionContainer>
        {step === SCHOOL_SELECTION && <SchoolSelection />}
        {step === CLASS_SELECTION && <ClassSelection />}
        {step === ACTIVITY_SELECTION && <ActivitySelection />}
        {step === STUDENT_LIST && <StudentsList />}
      </SectionContainer>
    </Container>
  );
};

export default SectionController;
