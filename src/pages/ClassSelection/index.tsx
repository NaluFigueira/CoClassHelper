import React from 'react';
import { Container, Divider } from './styles';
import { ClassSelectionProps } from './types';
import { classes } from '../../database/data';

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
