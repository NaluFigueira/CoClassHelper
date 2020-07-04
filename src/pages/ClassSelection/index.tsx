import React from 'react';
import { Container, Divider } from './styles';
import { ClassSelectionProps } from './types';
import { classes, schools } from '../../database/data';

const ClassSelection: React.FC<ClassSelectionProps> = ({
  schoolId,
  onSelectClass,
}) => {
  const schoolClasses = classes.filter((c) => c.schoolId === schoolId);
  const schoolName = schools.find((school) => school.id === schoolId)?.name;
  return (
    <Container>
      {schoolClasses.length === 0 ? (
        <h3>Não há turmas cadastradas para essa escola!</h3>
      ) : (
        <>
          <strong>{schoolName}</strong>
          <Divider />
          <h2>SELECIONE UMA TURMA</h2>
          <div>
            {schoolClasses.map((schoolClass) => (
              <div key={schoolClass.id}>
                <button
                  type="button"
                  onClick={() => onSelectClass(schoolClass.id)}
                >
                  {schoolClass.name}
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default ClassSelection;
