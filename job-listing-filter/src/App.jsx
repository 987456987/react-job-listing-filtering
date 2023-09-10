import './App.css'
import data from "../assets/data.json";
import JobPosting from './components/JobPosting';

function App() {

  return (
    <>
      {data.map((item) => (
        <JobPosting key={item.id} item={item} />
      ))}
    </>
  )
}

export default App
