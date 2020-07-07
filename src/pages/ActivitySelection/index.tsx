import React, { useContext } from 'react';
import { Container } from './styles';
import { activities } from '../../database/data';
import SectionContext from '../../context/section';

const ActivitySelection: React.FC = () => {
  const { selectedClass, HandleSelectActivity } = useContext(SectionContext);
  const classActivities = activities.filter(
    (activity) => activity.classId === selectedClass?.id,
  );

  return (
    <Container>
      {classActivities.length === 0 ? (
        <h3>Não há atividades cadastradas para essa turma!</h3>
      ) : (
        <>
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
