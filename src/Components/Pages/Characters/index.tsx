import React, { useState } from "react";

import "./char.scss";
import CharCollapse from "./CharCollapse/CharCollapse";
import Filters from "./Filters/Filters";
import SearchBox from "./SearchBox/SearchBox";
import { characters, charType } from "../../../data/pure-data";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../redux/hooks/redux-hooks";
import {
  clearAllFilters,
  handleFilterChange,
} from "../../../redux/store/data-slice/data-slice";

const Characters = () => {
  const data = useAppSelector((state) => state.data.filteredData);
  const dispatch = useAppDispatch();
  return (
    <div className="char">
      <div className="char-filters">
        <Filters />
      </div>
      <div className="char-content">
        <h5>CHARACTERS</h5>
        <SearchBox />
        <div className="clear-filter">
          <span>Results: {data.length} Characters</span>
          <button onClick={() => dispatch(clearAllFilters())}>
            Clear All Filters
          </button>
        </div>
        <div className="allChar">
          {data &&
            data.map((d) => (
              <CharCollapse key={d.subName + d.AG} chardata={d} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
