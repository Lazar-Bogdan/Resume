import './normalize.css'
import styled from 'styled-components'
import Layout from './components/Layout';
import Details from './components/Details';
import WorkExperience from './components/WorkExperience';
import Avatar from './components/Avatar';
import Education from './components/Education';
import Skills from './components/Skills';
import Hobby from './components/Hobby'

export default function App() {
  return (
    <Layout
      left={
        <div>
          <Details />
          <WorkExperience />
          <Hobby />
        </div>
      }
      right={
        <SecondColumn>
          <Avatar />
          <Education />
          <Skills />
        </SecondColumn>
      }
    />
  )
}

const SecondColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;