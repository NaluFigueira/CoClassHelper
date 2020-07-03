export interface StepperProps {
  onChangeStep(step: StepNumber): void;
  step?: StepNumber;
}

export interface StepTileProps {
  isSelected: boolean;
}

export enum StepNumber {
  SCHOOL_SELECTION,
  CLASS_SELECTION,
  ACTIVITY_SELECTION,
  STUDENT_LIST,
}
