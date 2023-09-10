/* eslint-disable no-prototype-builtins */
import { useContext } from "react";
import data from "./assets/data.json";
import JobPosting from "./components/JobPosting";
import { DataProvider, DataContext } from "./DataContext";

function App() {
  const { filterList } = useContext(DataContext);

  const hasAttr = (item) => {
    filterList.map((attr) => {
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          const propertyValue = item[key];
  
          // Check if the property's value is an array
          if (Array.isArray(propertyValue)) {
            // If it's an array, iterate over its elements and check for the attribute in each element
            for (const element of propertyValue) {
              if (String(element).includes(attr)) {
                return true;
              }
            }
          } else {
            // If it's not an array, check if the property's value (converted to a string) includes the attribute
            if (String(propertyValue).includes(attr)) {
              return true;
            }
          }
        }
      }
    })
    return false;
  };

  return (
    <DataProvider>
      <main>
        {data.map((item) =>
          !data ? (
            <JobPosting key={item.id} item={item} />
          ) : (
            hasAttr(item) && <JobPosting key={item.id} item={item} />
          )
        )}
      </main>
    </DataProvider>
  );
}

export default App;
