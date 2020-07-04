import React from 'react';
import { Container, Divider } from './styles';
import { ActivitySelectionProps } from './types';
import { activities, schools } from '../../database/data';

const ActivitySelection: React.FC<ActivitySelectionProps> = ({
  onSelectActivity,
  schoolId,
  classId,
}) => {
  const schoolName = schools.find((school) => school.id === schoolId)?.name;
  const className = schools.find((c) => c.id === classId)?.name;
  const classActivities = activities.filter(
    (activity) => activity.classId === classId,
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
                  onClick={() => onSelectActivity(activity.id)}
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
