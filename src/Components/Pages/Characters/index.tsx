import React, { useState } from "react";

import "./char.scss";
import CharCollapse from "./CharCollapse/CharCollapse";
import Filters from "./Filters/Filters";
import SearchBox from "./SearchBox/SearchBox";

const Characters = () => {
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
          <CharCollapse />
          <CharCollapse />
          <CharCollapse />
          <CharCollapse />
          <CharCollapse />
          <CharCollapse />
        </div>
      </div>
    </div>
  );
};

export default Characters;
