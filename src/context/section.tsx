import React, { createContext, useState, useCallback } from 'react';
import { StepNumber } from '../components/Stepper/types';
import { School, Class, Activity } from '../database/types';

export interface SectionContextData {
  stepNumber: StepNumber;
  selectedSchool: School | null;
  selectedClass: Class | null;
  selectedActivity: Activity | null;

  HandleChangeStep(selectedStep: StepNumber): void;
  HandleSelectSchool(newSchool: School): void;
  HandleSelectClass(newClass: Class): void;
  HandleSelectActivity(newActivity: Activity): void;
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
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null,
  );

  const HandleChangeStep = useCallback((selectedStep: StepNumber) => {
    if (selectedStep === SCHOOL_SELECTION) {
      setSelectedSchool(null);
    }
    if (selectedStep <= CLASS_SELECTION) {
      setSelectedClass(null);
    }
    if (selectedStep <= ACTIVITY_SELECTION) {
      setSelectedActivity(null);
    }
    setStepNumber(selectedStep);
  }, []);

  const HandleSelectSchool = useCallback((newSchool: School) => {
    setSelectedSchool(newSchool);
    setStepNumber(CLASS_SELECTION);
  }, []);

  const HandleSelectClass = useCallback((newClass: Class) => {
    setSelectedClass(newClass);
    setStepNumber(ACTIVITY_SELECTION);
  }, []);

  const HandleSelectActivity = useCallback((newActivity: Activity) => {
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
