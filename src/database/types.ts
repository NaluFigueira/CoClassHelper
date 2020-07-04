export interface School {
  id: number;
  name: string;
}

export interface Class {
  id: number;
  name: string;
  schoolId: number;
}

export interface Activity {
  id: number;
  name: string;
  classId: number;
}

export interface Student {
  id: number;
  classId: number;
  name: string;
}

export interface StudentActivityControl {
  activityId: number;
  studentId: number;
  grade: number;
  submitted: boolean;
}
