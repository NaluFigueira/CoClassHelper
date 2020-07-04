export interface ClassSelectionProps {
  schoolName: string;
  onSelectClass(className: string): void;
}

export interface Class {
  id: number;
  name: string;
}
