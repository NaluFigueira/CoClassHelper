import React, { createContext, useState, useCallback } from 'react';
import { StepNumber } from '../components/Stepper/types';

export interface SectionContextData {
  stepNumber: StepNumber;
  selectedSchool: string;
  selectedClass: string;
  selectedActivity: string;

  HandleChangeStep(selectedStep: StepNumber): void;
  HandleSelectSchool(newSchool: string): void;
  HandleSelectClass(newClass: string): void;
  HandleSelectActivity(newActivity: string): void;
}

const {
  SCHOOL_SELECTION,
  CLASS_SELECTION,
  ACTIVITY_SELECTION,
  STUDENT_LIST,
} = StepNumber;

const SectionContext = createContext<SectionContextData>(
  {} as SectionContextData,
);

export const SectionProvider: React.FC = ({ children }) => {
  const [stepNumber, setStepNumber] = useState<StepNumber>(SCHOOL_SELECTION);
  const [selectedSchool, setSelectedSchool] = useState<string>('');
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [selectedActivity, setSelectedActivity] = useState<string>('');

  const HandleChangeStep = useCallback((selectedStep: StepNumber) => {
    if (selectedStep === SCHOOL_SELECTION) {
      setSelectedSchool('');
      setSelectedClass('');
      setSelectedActivity('');
    }
    if (selectedStep === CLASS_SELECTION) {
      setSelectedClass('');
      setSelectedActivity('');
    }
    if (selectedStep === ACTIVITY_SELECTION) {
      setSelectedActivity('');
    }
    setStepNumber(selectedStep);
  }, []);

  const HandleSelectSchool = useCallback((newSchool: string) => {
    setSelectedSchool(newSchool);
    setStepNumber(CLASS_SELECTION);
  }, []);

  const HandleSelectClass = useCallback((newClass: string) => {
    setSelectedClass(newClass);
    setStepNumber(ACTIVITY_SELECTION);
  }, []);

  const HandleSelectActivity = useCallback((newActivity: string) => {
    setSelectedActivity(newActivity);
    setStepNumber(STUDENT_LIST);
  }, []);

  return (
    <SectionContext.Provider
      value={{
        stepNumber,
        selectedSchool,
        selectedClass,
        selectedActivity,
        HandleChangeStep,
        HandleSelectClass,
        HandleSelectActivity,
        HandleSelectSchool,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export default SectionContext;
