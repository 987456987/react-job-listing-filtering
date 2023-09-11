import { DataProvider } from "./DataContext";
import JobListings from "./JobListings";
import Header from "./components/Header";

function App() {

  return (
    <DataProvider>
      <Header/>
      <JobListings/>
    </DataProvider>
  );
}

export default App;
