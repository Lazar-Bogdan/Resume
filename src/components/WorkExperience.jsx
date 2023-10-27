import styled from 'styled-components';
import ExperienceCard from './ExperienceCard'

const WorkExperience = () => {
  return(
    <Container>
      <Title>Work experience</Title>
      <ExperienceList>
        <ExperienceCard
          title="Developer"
          start="2021"
          end="current"
          companyLogo="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
          companyName="CompInc"
          location="Romania"
          bulletPoints={[
            'Tech',
            'Eat',
            'Repeat'
          ]}
        />
        <ExperienceCard
          title="Tech Lead"
          start="September 2022"
          end="current"
          companyLogo="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
          companyName="Software company"
          location="Romania"
          bulletPoints={[
            'Visual Design',
            'Prototyping',
            'UX Researching',
            'Front-end Dev'
          ]} 
        />
        <ExperienceCard
          title="Senior Software Developer"
          start="March 2022"
          end="current"
          companyLogo="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
          companyName="Software company"
          location="Romania"
          bulletPoints={[
            'Visual Design',
            'Prototyping',
            'UX Researching',
            'Web / Mobile',
            'Front-end Dev'
          ]} 
        />
        <ExperienceCard 
          title="Softare Developer"
          start="June 2020"
          end="current"
          companyLogo="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
          companyName="Software company"
          location="Romania"
          bulletPoints={[
            'Visual Design',
            'Prototyping',
            'UX Researching',
            'Web / Mobile'
          ]} 
        />
      </ExperienceList>
    </Container>
  )
}

export default WorkExperience;

const Container = styled.div`
  width: 370px;
  height: 905px;
  flex-shrink: 0;
`;

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