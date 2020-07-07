import {
  School,
  Class,
  Activity,
  Student,
  StudentActivityControl,
} from './types';

export const schools: Array<School> = [
  {
    id: 0,
    name: 'E.E. MONSENHOR SARRION',
  },
  {
    id: 1,
    name: 'E.E. ANTÔNIO FIORAVANTE',
  },
  {
    id: 2,
    name: 'E.E. MARIETTA FERRAZ DE ASSUNPÇÃO',
  },
];

export const classes: Array<Class> = [
  {
    id: 0,
    name: '1° Ano A',
    schoolId: 0,
  },
  {
    id: 1,
    name: '1° Ano B',
    schoolId: 0,
  },
  {
    id: 2,
    name: '1° Ano C',
    schoolId: 0,
  },
  {
    id: 3,
    name: '1° Ano D',
    schoolId: 0,
  },
  {
    id: 4,
    name: '2° Ano A',
    schoolId: 0,
  },
  {
    id: 5,
    name: '2° Ano B',
    schoolId: 0,
  },
  {
    id: 6,
    name: '3° Ano A',
    schoolId: 0,
  },
  {
    id: 7,
    name: '3° Ano B',
    schoolId: 0,
  },
  {
    id: 8,
    name: '3° Ano C',
    schoolId: 0,
  },
  {
    id: 9,
    name: '3° Ano D',
    schoolId: 0,
  },
  {
    id: 10,
    name: '3° Ano E',
    schoolId: 0,
  },
  {
    id: 11,
    name: '3° Ano F',
    schoolId: 0,
  },
  {
    id: 12,
    name: '4° Ano A',
    schoolId: 0,
  },
  {
    id: 13,
    name: '4° Ano B',
    schoolId: 0,
  },
  {
    id: 14,
    name: '4° Ano C',
    schoolId: 0,
  },
  {
    id: 15,
    name: '5° Ano A',
    schoolId: 0,
  },
  {
    id: 16,
    name: '6° Ano A',
    schoolId: 0,
  },
  {
    id: 17,
    name: '7° Ano A',
    schoolId: 0,
  },
  {
    id: 18,
    name: '1° Ano A',
    schoolId: 1,
  },
  {
    id: 19,
    name: '1° Ano B',
    schoolId: 1,
  },
  {
    id: 20,
    name: '1° Ano C',
    schoolId: 1,
  },
  {
    id: 21,
    name: '1° Ano D',
    schoolId: 1,
  },
  {
    id: 22,
    name: '2° Ano A',
    schoolId: 1,
  },
  {
    id: 23,
    name: '2° Ano B',
    schoolId: 1,
  },
  {
    id: 24,
    name: '3° Ano A',
    schoolId: 1,
  },
  {
    id: 25,
    name: '3° Ano B',
    schoolId: 1,
  },
  {
    id: 26,
    name: '3° Ano C',
    schoolId: 1,
  },
  {
    id: 27,
    name: '3° Ano D',
    schoolId: 1,
  },
  {
    id: 28,
    name: '3° Ano E',
    schoolId: 1,
  },
  {
    id: 29,
    name: '3° Ano F',
    schoolId: 1,
  },
  {
    id: 30,
    name: '4° Ano A',
    schoolId: 1,
  },
  {
    id: 31,
    name: '4° Ano B',
    schoolId: 1,
  },
  {
    id: 32,
    name: '4° Ano C',
    schoolId: 1,
  },
  {
    id: 33,
    name: '5° Ano A',
    schoolId: 1,
  },
  {
    id: 34,
    name: '6° Ano A',
    schoolId: 1,
  },
  {
    id: 35,
    name: '7° Ano A',
    schoolId: 1,
  },
  {
    id: 36,
    name: '1° Ano A',
    schoolId: 2,
  },
  {
    id: 37,
    name: '1° Ano B',
    schoolId: 2,
  },
  {
    id: 38,
    name: '1° Ano C',
    schoolId: 2,
  },
  {
    id: 39,
    name: '1° Ano D',
    schoolId: 2,
  },
  {
    id: 40,
    name: '2° Ano A',
    schoolId: 2,
  },
  {
    id: 41,
    name: '2° Ano B',
    schoolId: 2,
  },
  {
    id: 42,
    name: '3° Ano A',
    schoolId: 2,
  },
  {
    id: 43,
    name: '3° Ano B',
    schoolId: 2,
  },
  {
    id: 44,
    name: '3° Ano C',
    schoolId: 2,
  },
  {
    id: 45,
    name: '3° Ano D',
    schoolId: 2,
  },
  {
    id: 46,
    name: '3° Ano E',
    schoolId: 2,
  },
  {
    id: 47,
    name: '3° Ano F',
    schoolId: 2,
  },
  {
    id: 48,
    name: '4° Ano A',
    schoolId: 2,
  },
  {
    id: 49,
    name: '4° Ano B',
    schoolId: 2,
  },
  {
    id: 50,
    name: '4° Ano C',
    schoolId: 2,
  },
  {
    id: 51,
    name: '5° Ano A',
    schoolId: 2,
  },
  {
    id: 52,
    name: '6° Ano A',
    schoolId: 2,
  },
  {
    id: 53,
    name: '7° Ano A',
    schoolId: 2,
  },
];

export const activities: Array<Activity> = [
  {
    id: 0,
    name: 'Atividade 29/05 - Inglês - 1° ANO A',
    classId: 0,
  },
  {
    id: 1,
    name: 'Atividade 26/05 - Inglês - 1° ANO A',
    classId: 0,
  },
  {
    id: 2,
    name: 'Atividade 22/05 - Inglês - 1° ANO A',
    classId: 0,
  },
  {
    id: 3,
    name: 'Atividade 15/05 - Inglês - 1° ANO A',
    classId: 0,
  },
  {
    id: 4,
    name: 'Atividade 29/05 - Inglês - 1° ANO A',
    classId: 1,
  },
  {
    id: 5,
    name: 'Atividade 26/05 - Inglês - 1° ANO A',
    classId: 1,
  },
  {
    id: 6,
    name: 'Atividade 22/05 - Inglês - 1° ANO A',
    classId: 1,
  },
  {
    id: 7,
    name: 'Atividade 15/05 - Inglês - 1° ANO A',
    classId: 1,
  },
  {
    id: 8,
    name: 'Atividade 29/05 - Inglês - 1° ANO A',
    classId: 2,
  },
  {
    id: 9,
    name: 'Atividade 26/05 - Inglês - 1° ANO A',
    classId: 2,
  },
  {
    id: 10,
    name: 'Atividade 22/05 - Inglês - 1° ANO A',
    classId: 2,
  },
  {
    id: 11,
    name: 'Atividade 15/05 - Inglês - 1° ANO A',
    classId: 2,
  },
  {
    id: 12,
    name: 'Atividade 29/05 - Inglês - 1° ANO A',
    classId: 3,
  },
  {
    id: 13,
    name: 'Atividade 26/05 - Inglês - 1° ANO A',
    classId: 3,
  },
  {
    id: 14,
    name: 'Atividade 22/05 - Inglês - 1° ANO A',
    classId: 3,
  },
  {
    id: 15,
    name: 'Atividade 15/05 - Inglês - 1° ANO A',
    classId: 3,
  },
];

export const students: Array<Student> = [
  {
    id: 0,
    name: 'Anna Oliveira Souza',
    classId: 0,
  },
  {
    id: 1,
    name: 'Arthur Carvalho Pinto',
    classId: 0,
  },
  {
    id: 2,
    name: 'Brenda Pereira Lima',
    classId: 0,
  },
  {
    id: 3,
    name: 'Bruna Araujo Lima',
    classId: 0,
  },
  {
    id: 4,
    name: 'Davi Rodrigues Araujo',
    classId: 0,
  },
  {
    id: 5,
    name: 'Diego Ferreira Oliveira',
    classId: 0,
  },
  {
    id: 6,
    name: 'Douglas Lima Oliveira',
    classId: 0,
  },
  {
    id: 7,
    name: 'Igor Araujo Santos',
    classId: 0,
  },
  {
    id: 8,
    name: 'Isabella Santos Araujo',
    classId: 0,
  },
  {
    id: 9,
    name: 'João Castro Pereira',
    classId: 0,
  },
  {
    id: 10,
    name: 'Kauã Carvalho Ferreira',
    classId: 0,
  },
  {
    id: 11,
    name: 'Leila Ferreira Goncalves',
    classId: 0,
  },
  {
    id: 12,
    name: 'Maria Ferreira Pereira',
    classId: 0,
  },
  {
    id: 13,
    name: 'Samuel Correia Carvalho',
    classId: 0,
  },
  {
    id: 14,
    name: 'Tânia Rodrigues Santos',
    classId: 0,
  },
  {
    id: 15,
    name: 'Vitór Fernandes Santos',
    classId: 0,
  },
  {
    id: 16,
    name: 'Anna Oliveira Souza',
    classId: 1,
  },
  {
    id: 17,
    name: 'Arthur Carvalho Pinto',
    classId: 1,
  },
  {
    id: 18,
    name: 'Brenda Pereira Lima',
    classId: 1,
  },
  {
    id: 19,
    name: 'Bruna Araujo Lima',
    classId: 1,
  },
  {
    id: 20,
    name: 'Davi Rodrigues Araujo',
    classId: 1,
  },
  {
    id: 21,
    name: 'Diego Ferreira Oliveira',
    classId: 1,
  },
  {
    id: 22,
    name: 'Douglas Lima Oliveira',
    classId: 1,
  },
  {
    id: 23,
    name: 'Igor Araujo Santos',
    classId: 1,
  },
  {
    id: 24,
    name: 'Isabella Santos Araujo',
    classId: 1,
  },
  {
    id: 25,
    name: 'João Castro Pereira',
    classId: 1,
  },
  {
    id: 26,
    name: 'Kauã Carvalho Ferreira',
    classId: 1,
  },
  {
    id: 27,
    name: 'Leila Ferreira Goncalves',
    classId: 1,
  },
  {
    id: 28,
    name: 'Maria Ferreira Pereira',
    classId: 1,
  },
  {
    id: 29,
    name: 'Samuel Correia Carvalho',
    classId: 1,
  },
  {
    id: 30,
    name: 'Tânia Rodrigues Santos',
    classId: 1,
  },
  {
    id: 31,
    name: 'Vitór Fernandes Santos',
    classId: 1,
  },
];

export const studentsActivities: Array<StudentActivityControl> = [
  {
    studentId: 0,
    activityId: 0,
    studentName: 'Anna Oliveira Souza',
    grade: '',
    submitted: false,
  },
  {
    studentId: 1,
    studentName: 'Arthur Carvalho Pinto',
    activityId: 0,
    grade: '',
    submitted: false,
  },
  {
    studentId: 2,
    studentName: 'Brenda Pereira Lima',
    activityId: 0,
    grade: '',
    submitted: false,
  },
  {
    studentId: 3,
    studentName: 'Bruna Araujo Lima',
    activityId: 0,
    grade: '',
    submitted: false,
  },
  {
    studentId: 4,
    studentName: 'Davi Rodrigues Araujo',
    activityId: 0,
    grade: '',
    submitted: false,
  },
  {
    studentId: 5,
    studentName: 'Diego Ferreira Oliveira',
    activityId: 0,
    grade: '',
    submitted: false,
  },
  {
    studentId: 6,
    studentName: 'Douglas Lima Oliveira',
    activityId: 0,
    grade: '',
    submitted: false,
  },
  {
    studentId: 7,
    studentName: 'Igor Araujo Santos',
    activityId: 0,
    grade: '',
    submitted: false,
  },
  {
    studentId: 8,
    studentName: 'Isabella Santos Araujo',
    activityId: 0,
    grade: '',
    submitted: false,
  },
  {
    studentId: 9,
    studentName: 'João Castro Pereira',
    activityId: 0,
    grade: '',
    submitted: false,
  },
  {
    studentId: 10,
    studentName: 'Kauã Carvalho Ferreira',
    activityId: 0,
    grade: '',
    submitted: false,
  },
  {
    studentId: 11,
    studentName: 'Leila Ferreira Goncalves',
    activityId: 0,
    grade: '',
    submitted: false,
  },
  {
    studentId: 12,
    studentName: 'Maria Ferreira Pereira',
    activityId: 0,
    grade: '',
    submitted: false,
  },
  {
    studentId: 13,
    studentName: 'Samuel Correia Carvalho',
    activityId: 0,
    grade: '',
    submitted: false,
  },
  {
    studentId: 14,
    studentName: 'Tânia Rodrigues Santos',
    activityId: 0,
    grade: '',
    submitted: false,
  },
  {
    studentId: 15,
    studentName: 'Vitór Fernandes Santos',
    activityId: 0,
    grade: '',
    submitted: false,
  },
  {
    studentId: 16,
    studentName: 'Anna Oliveira Souza',
    activityId: 1,
    grade: '',
    submitted: false,
  },
  {
    studentId: 17,
    studentName: 'Arthur Carvalho Pinto',
    activityId: 1,
    grade: '',
    submitted: false,
  },
  {
    studentId: 18,
    studentName: 'Brenda Pereira Lima',
    activityId: 1,
    grade: '',
    submitted: false,
  },
  {
    studentId: 19,
    studentName: 'Bruna Araujo Lima',
    activityId: 1,
    grade: '',
    submitted: false,
  },
  {
    studentId: 20,
    studentName: 'Davi Rodrigues Araujo',
    activityId: 1,
    grade: '',
    submitted: false,
  },
  {
    studentId: 21,
    studentName: 'Diego Ferreira Oliveira',
    activityId: 1,
    grade: '',
    submitted: false,
  },
  {
    studentId: 22,
    studentName: 'Douglas Lima Oliveira',
    activityId: 1,
    grade: '',
    submitted: false,
  },
  {
    studentId: 23,
    studentName: 'Igor Araujo Santos',
    activityId: 1,
    grade: '',
    submitted: false,
  },
  {
    studentId: 24,
    studentName: 'Isabella Santos Araujo',
    activityId: 1,
    grade: '',
    submitted: false,
  },
  {
    studentId: 25,
    studentName: 'João Castro Pereira',
    activityId: 1,
    grade: '',
    submitted: false,
  },
  {
    studentId: 26,
    studentName: 'Kauã Carvalho Ferreira',
    activityId: 1,
    grade: '',
    submitted: false,
  },
  {
    studentId: 27,
    studentName: 'Leila Ferreira Goncalves',
    activityId: 1,
    grade: '',
    submitted: false,
  },
  {
    studentId: 28,
    studentName: 'Maria Ferreira Pereira',
    activityId: 1,
    grade: '',
    submitted: false,
  },
  {
    studentId: 29,
    studentName: 'Samuel Correia Carvalho',
    activityId: 1,
    grade: '',
    submitted: false,
  },
  {
    studentId: 30,
    studentName: 'Tânia Rodrigues Santos',
    activityId: 1,
    grade: '',
    submitted: false,
  },
  {
    studentId: 31,
    studentName: 'Vitór Fernandes Santos',
    activityId: 1,
    grade: '',
    submitted: false,
  },
];
