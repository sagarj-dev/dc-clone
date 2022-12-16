import React, { useState } from "react";
import "./CheckBoxButton.scss";

type OptionsType = {
  label: string;
  value: string;
};

type CheckBoxButtonType = {
  label: string;
  data: OptionsType[];
  onChangeValue: (filter: string, v: string[]) => void;
};
const CheckBoxButton = ({ label, data, onChangeValue }: CheckBoxButtonType) => {
  const [state, setState] = useState<string[]>([]);

  const handleValues = (v: string) => {
    if (state.includes(v)) {
      let newState = state.filter((s) => s !== v);
      setState(newState);
    } else {
      setState([...state, v]);
    }
  };

  React.useEffect(() => {
    onChangeValue(label, state);
  }, [state]);

  return (
    <div
      className="radio-container"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleValues(e.target.value)
      }
    >
      {data.map((d) => (
        <>
          <input type="checkbox" id={d.label} name={label} value={d.value} />
          <label htmlFor={d.label} className="checkboxLabel">
            {d.label}
          </label>
        </>
      ))}
    </div>
  );
};

export default CheckBoxButton;
