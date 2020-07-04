import React from 'react';
import { Container, Divider } from './styles';
import { ActivitySelectionProps } from './types';

const activities = [
  {
    id: 0,
    name: 'Atividade 29/05 - Inglês - 1° ANO A',
  },
  {
    id: 1,
    name: 'Atividade 26/05 - Inglês - 1° ANO A',
  },
  {
    id: 2,
    name: 'Atividade 22/05 - Inglês - 1° ANO A',
  },
  {
    id: 3,
    name: 'Atividade 15/05 - Inglês - 1° ANO A',
  },
];

const ActivitySelection: React.FC<ActivitySelectionProps> = ({
  onSelectActivity,
  schoolName,
  className,
}) => {
  return (
    <Container>
      <strong>{`${schoolName} - ${className}`}</strong>
      <Divider />
      <h2>SELECIONE UMA ATIVIDADE</h2>
      <div>
        {activities.map((activity) => (
          <div key={activity.id}>
            <button
              type="button"
              onClick={() => onSelectActivity(activity.name)}
            >
              {activity.name}
            </button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ActivitySelection;
