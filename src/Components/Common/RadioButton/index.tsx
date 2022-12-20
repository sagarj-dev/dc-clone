import React from "react";
import "./RadioButton.scss";

type OptionsType = {
  label: string;
  value: string;
};

type RadioButtonType = {
  label: string;
  data: OptionsType[];
  onChangeValue: (name: string, v: string) => void;
};
const RadioButton = ({ label, data, onChangeValue }: RadioButtonType) => {
  return (
    <div
      className="radio-container"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChangeValue(label, e.target.value)
      }
    >
      {data.map((d) => (
        <div key={d.value}>
          <input type="radio" id={d.label} name={label} value={d.value} />
          <label htmlFor={d.label} className="radioLabel">
            {d.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButton;
