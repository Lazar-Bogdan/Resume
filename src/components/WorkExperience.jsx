import styled from 'styled-components';
import ExperienceCard from './ExperienceCard'

const WorkExperience = () => {
  return(
    <div>
      <Title>Work Experience</Title>
      <ExperienceList>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </ExperienceList>
    </div>
  )
}

export default WorkExperience;

const Title = styled.div`
  color: #0B0B0B;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 58px;
  margin-bottom: 23px;
`;

const ExperienceList = styled.div`
  display:flex;
  flex-direction:column;
  gap: 40px;
`;