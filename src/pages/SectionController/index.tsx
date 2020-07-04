import React, { useState, useCallback, useEffect } from 'react';
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
  const [step, setStep] = useState<StepNumber>(SCHOOL_SELECTION);
  const [school, setSchool] = useState<string>('');

  const HandleChangeStep = useCallback((selectedStep: StepNumber) => {
    if (selectedStep === SCHOOL_SELECTION) {
      setSchool('');
    }
    setStep(selectedStep);
  }, []);

  const HandleSelectSchool = useCallback((selectedSchool: string) => {
    setSchool(selectedSchool);
    setStep(CLASS_SELECTION);
  }, []);

  return (
    <Container>
      <Stepper onChangeStep={HandleChangeStep} step={step} />
      <SectionContainer>
        {step === SCHOOL_SELECTION && (
          <SchoolSelection onSelectSchool={HandleSelectSchool} />
        )}
        {step === CLASS_SELECTION && <ClassSelection />}
        {step === ACTIVITY_SELECTION && <ActivitySelection />}
        {step === STUDENT_LIST && <StudentsList />}
      </SectionContainer>
    </Container>
  );
};

export default SectionController;
