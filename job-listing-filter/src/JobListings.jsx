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
      let found = false; // Initialize a variable to track if the attribute is found
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
            // If it's not an array, check if the property's value (converted to a string) includes the attribute
            if (String(propertyValue).includes(attr)) {
              found = true;
              break; // No need to continue searching if the attribute is found
            }
          }
        }
      }

      // If the attribute is not found, return false
      if (!found) {
        return false;
      }
    }

    // If all attributes are found, return true
    return true;
  };

  return (
    <main>
      {data.map((item) =>
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
