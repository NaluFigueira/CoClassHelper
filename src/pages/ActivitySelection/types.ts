export interface ActivitySelectionProps {
  schoolId: number;
  classId: number;
  onSelectActivity(activityId: number): void;
}
