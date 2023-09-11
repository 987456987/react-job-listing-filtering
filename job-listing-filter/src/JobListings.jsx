/* eslint-disable no-prototype-builtins */
import data from "./assets/data.json";
import JobPosting from "./components/JobPosting";

import { useContext } from "react";
import { DataContext } from "./DataContext";

function JobListings() {
  const { filterList } = useContext(DataContext);
  console.log(filterList);

  const hasAttr = (item) => {
    for (const attr of filterList) {
      let found = false; // Track if the attribute is found
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          const propertyValue = item[key];
          // Check if the property's value is an array
          if (Array.isArray(propertyValue)) {
            // If it's an array, iterate over its elements and check for the attribute in each element
            for (const element of propertyValue) {
              if (String(element).includes(attr)) {
                found = true;
                break; // No need to continue searching if the attribute is found
              }
            }
          } else {
            // If it's not an array, check the property's value
            if (String(propertyValue).includes(attr)) {
              found = true;
              break; // No need to continue searching if the attribute is found
            }
          }
        }
      }
      if (!found) {
        return false;
      }
    }
    //If all property values are found return true
    return true;
  };
  return (
    <main>
      {data.map((item) =>
        //If no properties are in filter then display all of them
        filterList.length == 0 ? (
          <JobPosting key={item.id} item={item} />
        ) : (
          hasAttr(item) && <JobPosting key={item.id} item={item} />
        )
      )}
    </main>
  );
}

export default JobListings;
