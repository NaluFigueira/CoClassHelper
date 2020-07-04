export interface ActivitySelectionProps {
  schoolName: string;
  className: string;
  onSelectActivity(activityName: string): void;
}

export interface Activity {
  id: number;
  name: string;
}
