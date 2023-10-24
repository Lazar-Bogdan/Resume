import styled from 'styled-components'

const Details = () => {
  return (
    <Container>
      <Name>Lazar Bogdan</Name>
      <Title>Rockstar Developer</Title>
      <ContactRow>
        <Contact>040769428601</Contact>
        <Contact>bogdilazar5@gmail.com</Contact>
      </ContactRow>
    </Container>
  )
}

export default Details;

const Container = styled.div`
  display:flex;
  flex-direction: column;

  margin-top: 43px;
  margin-left: 58px;
  margin-bottom: 45px;
`;

const Name = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: 140%; /* 50.4px */
`;

const Title = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */

  padding-bottom: 6px;
`;

const Contact = styled.span`
  color: #0B0B0B;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;
