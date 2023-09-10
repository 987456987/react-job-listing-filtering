import { DataProvider } from "./DataContext";
import JobListings from "./JobListings";

function App() {

  return (
    <DataProvider>
      <JobListings/>
    </DataProvider>
  );
}

export default App;
