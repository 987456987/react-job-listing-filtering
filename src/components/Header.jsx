import { DataContext } from "../DataContext";
import { useContext } from "react";

function Header() {
  const { filterList, clearFilter, removeFilter } = useContext(DataContext);

  return (
    <>
      <header className={filterList.length > 0 && "filter-activated"}>
        {filterList.length > 0 && (
          <div className="filter-container">
            <div className="filters">
              {filterList.map((filter) => (
                <div className="filter" key={filter}>
                  <p className="filter-text">{filter}</p>
                  <button className="filter-x" onClick={() => removeFilter(filter)}>x</button>
                </div>
              ))}
            </div>
            <button className="filter-clear-button" onClick={() => clearFilter()}>Clear</button>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
