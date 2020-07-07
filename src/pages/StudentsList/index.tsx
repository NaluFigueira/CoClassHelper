import React, { useContext, useState } from 'react';
import SectionContext from '../../context/section';
import { students, studentsActivities } from '../../database/data';
import { Container } from './styles';
import { StudentActivityControl } from '../../database/types';

const StudentsList: React.FC = () => {
  const { selectedClass, selectedActivity } = useContext(SectionContext);
  const classStudents = students.filter(
    (student) => student.classId === selectedClass?.id,
  );
  const classStudentActivity = studentsActivities.filter(
    (studentActivity) => studentActivity.activityId === selectedActivity?.id,
  );
  const [studentsActivity, setStudentsActivity] = useState<
    Array<StudentActivityControl>
  >(classStudentActivity);

  function HandleChangeGrade(grade: string, index: number) {
    const studentsActivityCopy = [...studentsActivity];
    studentsActivityCopy[index].grade = grade;
    classStudentActivity[index].grade = grade;
    setStudentsActivity(studentsActivityCopy);
  }

  function HandleChangeSubmitted(submitted: boolean, index: number) {
    const studentsActivityCopy = [...studentsActivity];
    if (!submitted) {
      studentsActivityCopy[index].grade = '';
      classStudentActivity[index].grade = '';
    }
    studentsActivityCopy[index].submitted = submitted;
    classStudentActivity[index].submitted = submitted;
    setStudentsActivity(studentsActivityCopy);
  }

  return (
    <Container>
      {classStudents.length === 0 ? (
        <h3>Não há alunos cadastrados para essa turma!</h3>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Nota</th>
              <th>Entregue</th>
            </tr>
          </thead>
          <tbody>
            {studentsActivity.map((student, index) => (
              <tr key={student.studentId}>
                <td>{student.studentName}</td>
                <td>
                  <input
                    type="number"
                    disabled={!student.submitted}
                    value={student.grade}
                    min={0}
                    onChange={(event) => {
                      HandleChangeGrade(event.target.value, index);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={student.submitted}
                    onChange={(event) => {
                      HandleChangeSubmitted(event.target.checked, index);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Container>
  );
};

export default StudentsList;
