import React from 'react';
import { Container } from './styles';
import { SchoolSelectionProps } from './types';
import { schools } from '../../database/data';

const SchoolSelection: React.FC<SchoolSelectionProps> = ({
  onSelectSchool,
}) => {
  return (
    <Container>
      {schools.map((school) => (
        <div key={school.id}>
          <button type="button" onClick={() => onSelectSchool(school.name)}>
            {school.name}
          </button>
        </div>
      ))}
    </Container>
  );
};

export default SchoolSelection;
