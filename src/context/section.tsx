import React, { createContext, useState, useCallback } from 'react';
import { StepNumber } from '../components/Stepper/types';

export interface SectionContextData {
  stepNumber: StepNumber;
  selectedSchool: number;
  selectedClass: number;
  selectedActivity: number;

  HandleChangeStep(selectedStep: StepNumber): void;
  HandleSelectSchool(newSchool: number): void;
  HandleSelectClass(newClass: number): void;
  HandleSelectActivity(newActivity: number): void;
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
  const [selectedSchool, setSelectedSchool] = useState<number>(0);
  const [selectedClass, setSelectedClass] = useState<number>(0);
  const [selectedActivity, setSelectedActivity] = useState<number>(0);

  const HandleChangeStep = useCallback((selectedStep: StepNumber) => {
    if (selectedStep === SCHOOL_SELECTION) {
      setSelectedSchool(0);
      setSelectedClass(0);
      setSelectedActivity(0);
    }
    if (selectedStep === CLASS_SELECTION) {
      setSelectedClass(0);
      setSelectedActivity(0);
    }
    if (selectedStep === ACTIVITY_SELECTION) {
      setSelectedActivity(0);
    }
    setStepNumber(selectedStep);
  }, []);

  const HandleSelectSchool = useCallback((newSchool: number) => {
    setSelectedSchool(newSchool);
    setStepNumber(CLASS_SELECTION);
  }, []);

  const HandleSelectClass = useCallback((newClass: number) => {
    setSelectedClass(newClass);
    setStepNumber(ACTIVITY_SELECTION);
  }, []);

  const HandleSelectActivity = useCallback((newActivity: number) => {
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
