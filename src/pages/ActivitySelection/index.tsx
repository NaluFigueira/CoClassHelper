import React from 'react';
import { Container, Divider } from './styles';
import { ActivitySelectionProps } from './types';
import { activities } from '../../database/data';

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
