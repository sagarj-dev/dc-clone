import React, { useState } from "react";

import "./char.scss";
import CharCollapse from "./CharCollapse/CharCollapse";
import Filters from "./Filters/Filters";
import SearchBox from "./SearchBox/SearchBox";
import { characters, charType } from "../../../data/pure-data";
import { useAppSelector } from "../../../redux/hooks/redux-hooks";

const Characters = () => {
  const data = useAppSelector((state) => state.data.filteredData);

  return (
    <div className="char">
      <div className="char-filters">
        <Filters />
      </div>
      <div className="char-content">
        <h5>CHARACTERS</h5>
        <SearchBox />
        <div className="clear-filter">
          <span>Results: 188 Characters</span>
          <button>Clear All Filters</button>
        </div>
        <div className="allChar">
          {data.map((d) => (
            <CharCollapse chardata={d} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
