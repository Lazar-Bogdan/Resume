import styled from 'styled-components';
import SkillsCard from './SkillsCard';

const Skills = () => {
  return (
    <Container>
      <Title>Skills</Title>
      <SkillCardsList>
        <SkillsCard 
          title="Software"
          myskills={[
            'VSCode, Docker, Github, Figma',
            'APIs'
          ]}
        />
        <SkillsCard 
          title="Front-end"
          myskills={[
            'NPM, HTML, CSS, Javascript, Typescript',
            'React, Redux, styled-components, axios',            
          ]}
        />
        <SkillsCard 
          title="I can"
          myskills={[
            'Translate Figma designs into code',
            'Build interactive websited',
            'Consume third party APIs',
            'and more ...........'
          ]}
        />
      </SkillCardsList>
    </Container>
  )
}

export default Skills;

const Container = styled.div`
  width: 350px;
  height: 497px;
  flex-shrink: 0;
`;

const Title = styled.div`
  width: 313px;  
  color: #0B0B0B;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 50px;
  margin-bottom: 20px;
  margin-left: 40px;
`;

const SkillCardsList = styled.div`
  display:flex;
  flex-direction:column;
  gap: 23px;
`;