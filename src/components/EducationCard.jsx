import styled from 'styled-components';

const EducationCard = (props) => {

  return (
    <Container>
      <Period>{props.period}</Period>
      <College>{props.college}</College>
      <SpecilizationList>
        {props.specialization?.map(specialization => (
          <Specialization>{specialization}</Specialization>
        ))}
      </SpecilizationList>
    </Container>
  )
}

export default EducationCard;

const Container = styled.div`
  display: inline-flex;
  padding: 21px 55px 22px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
  border: 3px solid #211814;
  background: #FFE9A8;
  box-shadow: -10px 10px 0px 0px rgba(0, 0, 0, 0.15);
`;

const Period = styled.span`
  width: 141px;
  color: #595959;
  font-family: Source Sans Pro;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
`;

const College = styled.span`
  width: 156px;
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const SpecilizationList = styled.div`
  width: 196px;
  height: 39px;
  display:flex;
  flex-direction: column;
  gap: 1px;
`;

const Specialization = styled.span`
  width: 196px;
  height: 39px;
  color: #595959;
  font-family: Source Sans Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;