import React from 'react';
import { Container } from './styles';
import { SchoolSelectionProps } from './types';
import { schools } from '../../database/data';

const SchoolSelection: React.FC<SchoolSelectionProps> = ({
  onSelectSchool,
}) => {
  return (
    <Container>
      {schools.length === 0 ? (
        <h3>Não há escolas cadastradas!</h3>
      ) : (
        schools.map((school) => (
          <div key={school.id}>
            <button type="button" onClick={() => onSelectSchool(school.id)}>
              {school.name}
            </button>
          </div>
        ))
      )}
    </Container>
  );
};

export default SchoolSelection;
