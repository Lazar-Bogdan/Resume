import styled from 'styled-components';

const Avatar = () => {
  return (
    <Container>
      <Bullet xmlns="http://www.w3.org/2000/svg" width="42" height="23" viewBox="0 0 42 23" fill="none">
        <mask id="path-1-inside-1_304_146" fill="white">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.56602 4.23529C7.56362 4.23529 7.56122 4.23529 7.55882 4.23529C3.66034 4.23529 0.5 7.39563 0.5 11.2941C0.5 15.1926 3.66034 18.3529 7.55882 18.3529L32.9706 18.3529C36.8691 18.3529 40.0294 15.1926 40.0294 11.2941C40.0294 7.39564 36.8691 4.23529 32.9706 4.23529H7.56602Z"/>
        </mask>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.56602 4.23529C7.56362 4.23529 7.56122 4.23529 7.55882 4.23529C3.66034 4.23529 0.5 7.39563 0.5 11.2941C0.5 15.1926 3.66034 18.3529 7.55882 18.3529L32.9706 18.3529C36.8691 18.3529 40.0294 15.1926 40.0294 11.2941C40.0294 7.39564 36.8691 4.23529 32.9706 4.23529H7.56602Z" fill="#EDECFF"/>
        <path d="M7.56602 4.23529L7.56402 6.23529H7.56602V4.23529ZM7.55882 18.3529L7.55882 16.3529H7.55882V18.3529ZM32.9706 18.3529V20.3529V18.3529ZM7.56802 2.2353C7.56495 2.23529 7.56189 2.23529 7.55882 2.23529V6.23529C7.56056 6.23529 7.56229 6.23529 7.56402 6.23529L7.56802 2.2353ZM7.55882 2.23529C2.55577 2.23529 -1.5 6.29106 -1.5 11.2941H2.5C2.5 8.5002 4.76491 6.23529 7.55882 6.23529V2.23529ZM-1.5 11.2941C-1.5 16.2972 2.55577 20.3529 7.55882 20.3529V16.3529C4.76491 16.3529 2.5 14.088 2.5 11.2941H-1.5ZM32.9706 16.3529L7.55882 16.3529L7.55882 20.3529L32.9706 20.3529V16.3529ZM32.9706 20.3529C37.9736 20.3529 42.0294 16.2972 42.0294 11.2941H38.0294C38.0294 14.088 35.7645 16.3529 32.9706 16.3529V20.3529ZM42.0294 11.2941C42.0294 6.29107 37.9736 2.23529 32.9706 2.23529V6.23529C35.7645 6.23529 38.0294 8.50021 38.0294 11.2941H42.0294ZM7.56602 6.23529H32.9706V2.23529H7.56602V6.23529Z" fill="black" mask="url(#path-1-inside-1_304_146)"/>
        <circle cx="30.1471" cy="11.2941" r="10.2941" fill="#42F4BF" stroke="black" stroke-width="2"/>
      </Bullet>
    </Container>
  )
}

export default Avatar;

const Container = styled.div`
  display:flex;
  width: 213px;
  height: 213px;
  flex-shrink: 0;
  border: 4px solid #000;
  margin-left: -50px;
  background: #FFF;
  box-shadow: 16px 16px 0px 0px #928CF8;
  margin-top: -35px;
  background: url("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
   -webkit-background-size: cover;
   -moz-background-size: cover;
   -o-background-size: cover;
   background-size: cover;
`;

const Bullet = styled.svg`
  width: 40.941px;
  height: 22.588px;
  flex-shrink: 0;
  position: relative;
  margin-top: 180px;
  margin-left: 160px;
`;