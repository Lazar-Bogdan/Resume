import './normalize.css'
import Layout from './components/Layout';
import Details from './components/Details';
import WorkExperience from './components/WorkExperience';

export default function App() {
  return (
    <Layout
      left={
        <div>
          <Details />
          <WorkExperience />
        </div>
      }
      right={
        <div>right side</div>
      }
    />
  )
}