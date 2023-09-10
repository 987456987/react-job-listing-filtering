import data from "./assets/data.json";
import JobPosting from './components/JobPosting';

function App() {

  return (
    <main>
      {data.map((item) => (
        <JobPosting key={item.id} item={item} />
      ))}
    </main>
  )
}

export default App
