import React, { useContext } from 'react';
import { Container, Divider } from './styles';
import { classes, schools } from '../../database/data';
import SectionContext from '../../context/section';

const ClassSelection: React.FC = () => {
  const { selectedSchool, HandleSelectClass } = useContext(SectionContext);
  const schoolClasses = classes.filter(
    (c) => c.schoolId === selectedSchool?.id,
  );
  const schoolName = schools.find((school) => school.id === selectedSchool?.id)
    ?.name;
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
                  onClick={() => HandleSelectClass(schoolClass)}
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
