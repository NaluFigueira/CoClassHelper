import React from 'react';
import { Container, Divider } from './styles';
import { Class, ClassSelectionProps } from './types';

const classes: Array<Class> = [
  {
    id: 0,
    name: '1° Ano A',
  },
  {
    id: 1,
    name: '1° Ano B',
  },
  {
    id: 2,
    name: '1° Ano C',
  },
  {
    id: 3,
    name: '1° Ano D',
  },
  {
    id: 4,
    name: '2° Ano A',
  },
  {
    id: 5,
    name: '2° Ano B',
  },
  {
    id: 6,
    name: '3° Ano A',
  },
  {
    id: 7,
    name: '3° Ano B',
  },
  {
    id: 8,
    name: '3° Ano C',
  },
  {
    id: 9,
    name: '3° Ano D',
  },
  {
    id: 10,
    name: '3° Ano E',
  },
  {
    id: 11,
    name: '3° Ano F',
  },
  {
    id: 12,
    name: '4° Ano A',
  },
  {
    id: 13,
    name: '4° Ano B',
  },
  {
    id: 14,
    name: '4° Ano C',
  },
  {
    id: 15,
    name: '5° Ano A',
  },
  {
    id: 16,
    name: '6° Ano A',
  },
  {
    id: 17,
    name: '7° Ano A',
  },
];

const ClassSelection: React.FC<ClassSelectionProps> = ({
  schoolName,
  onSelectClass,
}) => {
  return (
    <Container>
      <strong>{schoolName}</strong>
      <Divider />
      <h2>SELECIONE UMA TURMA</h2>
      <div>
        {classes.map((schoolClass) => (
          <div key={schoolClass.id}>
            <button
              type="button"
              onClick={() => onSelectClass(schoolClass.name)}
            >
              {schoolClass.name}
            </button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ClassSelection;
