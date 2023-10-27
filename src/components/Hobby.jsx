import styled from 'styled-components';

const Hobby = () => {
  return (
    <div>
      <Title>Hobby</Title>
      <Likes>Sport./.. Learning./.. Music./.. Travel./.. Games</Likes>
    </div>
  )  
}

export default Hobby;

const Title = styled.div`
  color: #000;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 100%; /* 18px */
  margin-left:43px;
  margin-bottom:13px;
  margin-top:100px;
`;

const Likes = styled.div`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: 100%;
  margin-left:43px;
  margin-bottom:43px;
`;