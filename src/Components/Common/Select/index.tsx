import React from "react";
import "./select.scss";

type OptionsType = {
  label: string;
  value: string;
};

type SelectButtonType = {
  data: OptionsType[];
  onChangeValue: (v: string) => void;
};

const Select = ({ data, onChangeValue }: SelectButtonType) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    e.target.blur();
  };
  return (
    <>
      <div className="select">
        <select id="standard-select" onChange={(e) => handleChange(e)}>
          {data.map((d) => (
            <option value={d.value}>{d.label}</option>
          ))}
        </select>
        <span className="focus"></span>
      </div>
    </>
  );
};

export default Select;
