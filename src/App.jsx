import './normalize.css'
import Layout from './components/Layout';
import Details from './components/Details';

export default function App() {
  return (
    <Layout
      left={
        <Details />
      }
      right={
        <div>right side</div>
      }
    />
  )
}