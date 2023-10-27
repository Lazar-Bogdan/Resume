import styled from 'styled-components'


const Layout = (props) => {
  return (
    <Background>
    <Page>
      <Column>
        {props.left}
      </Column>
      <Column>
        {props.right}
      </Column>
    </Page>
    </Background>
  )
}

export default Layout;

const Background = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #7E41FF;
`

const Page = styled.div`
  margin: 45px 58.5px 74px 66.5px;
  width: 791px;
  height: 1282px;
  flex-shrink: 0;
  border: 5px solid #000;
  background: #FCC526;
  box-shadow: 24px 20px 0px 0px rgba(52, 52, 51, 0.35);
  display:flex;
  flex-direction:row;
`

const Column = styled.div`
  flex:1;
`