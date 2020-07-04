import React, { useState, useCallback } from 'react';
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
  const [selectedSchool, setSelectedSchool] = useState<string>('');
  const [selectedClass, setSelectedClass] = useState<string>('');

  const HandleChangeStep = useCallback((selectedStep: StepNumber) => {
    if (selectedStep === SCHOOL_SELECTION) {
      setSelectedSchool('');
    }
    setSelectedClass('');
    setStep(selectedStep);
  }, []);

  const HandleSelectSchool = useCallback((newSchool: string) => {
    setSelectedSchool(newSchool);
    setStep(CLASS_SELECTION);
  }, []);

  const HandleSelectClass = useCallback((newClass: string) => {
    setSelectedClass(newClass);
    setStep(ACTIVITY_SELECTION);
  }, []);

  return (
    <Container>
      <Stepper onChangeStep={HandleChangeStep} step={step} />
      <SectionContainer>
        {step === SCHOOL_SELECTION && (
          <SchoolSelection onSelectSchool={HandleSelectSchool} />
        )}
        {step === CLASS_SELECTION && (
          <ClassSelection
            schoolName={selectedSchool}
            onSelectClass={HandleSelectClass}
          />
        )}
        {step === ACTIVITY_SELECTION && <ActivitySelection />}
        {step === STUDENT_LIST && <StudentsList />}
      </SectionContainer>
    </Container>
  );
};

export default SectionController;
