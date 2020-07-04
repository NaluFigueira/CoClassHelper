export interface SchoolSelectionProps {
  onSelectSchool(school: string): void;
}

export interface School {
  id: number;
  name: string;
}
