/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DataContext } from "../DataContext";

function JobPosting({ item }) {
  const { addFilter } = useContext(DataContext);

  return (
    <>
      <div className="main-container">
      <div className={`edge${item.featured ? ' featured-edge' : ''}`}></div>
        <div className="content-container">
          <div className="left-container">
            <img src={item.logo} className="logo" />
            <div className="info-container">
              <div className="top-container">
                <h3>{item.company}</h3>
                {item.new && <p className="new">NEW!</p>}
                {item.featured && <p className="featured">FEATURED</p>}
              </div>
              <div className="mid-container">
                <h2>{item.position}</h2>
              </div>
              <div className="bottom-container">
                <p>{item.postedAt}</p>
                <div className="dot"></div>
                <p>{item.contract}</p>
                <div className="dot"></div>
                <p>{item.location}</p>
              </div>
            </div>
          </div>
          <div className="right-container">
            <button onClick={() => addFilter(item.role)}>{item.role}</button>
            <button onClick={() => addFilter(item.level)}>{item.level}</button>
            {item.languages.map((lang) => (
              <button key={lang} onClick={() => addFilter(lang)}>
                {lang}
              </button>
            ))}
            {item.tools.map((tool) => (
              <button key={tool} onClick={() => addFilter(tool)}>
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default JobPosting;
