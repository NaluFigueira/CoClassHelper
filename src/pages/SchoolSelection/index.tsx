import React from 'react';
import { Container } from './styles';
import { SchoolSelectionProps, School } from './types';

const schools: Array<School> = [
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
