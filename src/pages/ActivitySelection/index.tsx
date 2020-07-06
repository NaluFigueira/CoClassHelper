import React, { useContext } from 'react';
import { Container, Divider } from './styles';
import { activities, schools, classes } from '../../database/data';
import SectionContext from '../../context/section';

const ActivitySelection: React.FC = () => {
  const { selectedSchool, selectedClass, HandleSelectActivity } = useContext(
    SectionContext,
  );
  const schoolName = schools.find((school) => school.id === selectedSchool?.id)
    ?.name;
  const className = classes.find((c) => c.id === selectedClass?.id)?.name;
  const classActivities = activities.filter(
    (activity) => activity.classId === selectedClass?.id,
  );

  return (
    <Container>
      {classActivities.length === 0 ? (
        <h3>Não há atividades cadastradas para essa turma!</h3>
      ) : (
        <>
          <strong>{`${schoolName} - ${className}`}</strong>
          <Divider />
          <h2>SELECIONE UMA ATIVIDADE</h2>
          <div>
            {classActivities.map((activity) => (
              <div key={activity.id}>
                <button
                  type="button"
                  onClick={() => HandleSelectActivity(activity)}
                >
                  {activity.name}
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default ActivitySelection;
