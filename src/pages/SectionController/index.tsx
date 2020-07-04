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
  const {
    stepNumber,
    selectedSchool,
    selectedClass,
    selectedActivity,
    HandleChangeStep,
    HandleSelectSchool,
    HandleSelectClass,
    HandleSelectActivity,
  } = useContext(SectionContext);

  return (
    <Container>
      <Stepper onChangeStep={HandleChangeStep} step={stepNumber} />
      <SectionContainer>
        {stepNumber === SCHOOL_SELECTION && (
          <SchoolSelection onSelectSchool={HandleSelectSchool} />
        )}
        {stepNumber === CLASS_SELECTION && (
          <ClassSelection
            schoolName={selectedSchool}
            onSelectClass={HandleSelectClass}
          />
        )}
        {stepNumber === ACTIVITY_SELECTION && (
          <ActivitySelection
            schoolName={selectedSchool}
            className={selectedClass}
            onSelectActivity={HandleSelectActivity}
          />
        )}
        {stepNumber === STUDENT_LIST && <StudentsList />}
      </SectionContainer>
    </Container>
  );
};

export default SectionController;
