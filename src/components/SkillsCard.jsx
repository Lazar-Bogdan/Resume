import styled from 'styled-components';

const SkillsCard = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <MySkillsContainer>
        {props.myskills?.map(myskills => (
          <MySkills>{myskills}, </MySkills>
        ))}
      </MySkillsContainer>
    </Container>
  )
}

export default SkillsCard;

const Container = styled.div`
  display: flex;
  width: 230px;
  padding: 25px 73px 25px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;
  border: 3px solid #211814;
  background: #FFE9A8;
  box-shadow: -10px 10px 0px 0px rgba(0, 0, 0, 0.15);
  margin-left: 40px;
`;

const Title = styled.span`
  width: 156px;
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const MySkillsContainer = styled.div`
  width: 259px;
  display:flex;
  flex-direction: column;
  gap: 1px;
`;

const MySkills = styled.span`
  color: #595959;
  font-family: Source Sans Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;