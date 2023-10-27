import styled from 'styled-components';
import EducationCard from './EducationCard';

const Education = () => {

  return (
    <div>
      <Title>Education</Title>
      <EducationList>
        <EducationCard
          period="2023-2024"
          college="tenxbase"
          specialization={[
            'Front-End Developer Program'
          ]}
        />
        <EducationCard
          period="2020-2023"
          college="Universitate"
          specialization={[
            'Informatica',
            'Inginerie'
          ]}
        />
      </EducationList>
    </div>
  )
}

export default Education;

const Title = styled.div`
  width: 269px;
  color: #0B0B0B;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const EducationList = styled.div`
  display:flex;
  flex-direction:column;
  gap: 40px;
`;