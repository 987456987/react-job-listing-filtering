/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [filterList, setFilterList] = useState([]);

  const addFilter = (attr) => {
    if (filterList.findIndex((item) => item == attr) == -1) {
      setFilterList([...filterList, attr]);
    }
  };

  const clearFilter = () => {
    setFilterList([]);
  };

  return (
    <DataContext.Provider value={{ filterList, addFilter, clearFilter }}>
      {children}
    </DataContext.Provider>
  ); 
};

export { DataContext, DataProvider };
