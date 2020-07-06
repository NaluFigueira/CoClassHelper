import React, { useContext } from 'react';
import { Container } from './styles';
import { schools } from '../../database/data';
import SectionContext from '../../context/section';

const SchoolSelection: React.FC = () => {
  const { HandleSelectSchool } = useContext(SectionContext);

  return (
    <Container>
      {schools.length === 0 ? (
        <h3>Não há escolas cadastradas!</h3>
      ) : (
        schools.map((school) => (
          <div key={school.id}>
            <button type="button" onClick={() => HandleSelectSchool(school)}>
              {school.name}
            </button>
          </div>
        ))
      )}
    </Container>
  );
};

export default SchoolSelection;
