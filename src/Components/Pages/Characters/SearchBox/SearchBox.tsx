import React from "react";
import { useAppDispatch } from "../../../../redux/hooks/redux-hooks";
import { handleSearchChange } from "../../../../redux/store/data-slice/data-slice";
import "./SearchBox.scss";
const SearchBox = () => {
  const [data, setData] = React.useState<string>("");

  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
    dispatch(handleSearchChange(e.target.value));
  };
  return (
    <div className="searchBox">
      <input placeholder="Search...." value={data} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
