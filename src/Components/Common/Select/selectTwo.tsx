import React, { useState } from "react";
import "./selectTwo.scss";

type OptionsType = {
  label: string;
  value: string;
};

type SelectButtonType = {
  data: OptionsType[];
  title: string;
  onChangeValue: (v: string) => void;
};

const SelectTwo = ({ data, onChangeValue, title }: SelectButtonType) => {
  const [listState, setListState] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleSelect = (
    value: string | undefined,
    name: string | undefined
  ) => {
    if (name && value) {
      onChangeValue(value);
      setSelectedItem(name);
    }
  };

  return (
    <div
      className="selectContainer"
      onClick={() => {
        setListState(!listState);
      }}
    >
      <span className="selectLabel">{selectedItem || title}</span>
      <ul
        className={`${listState ? "selectList selectList-open" : "selectList"}`}
      >
        {data.map((d) => (
          <li
            className="selectItem"
            onClick={(e) => {
              handleSelect(
                e.currentTarget.dataset.value,
                e.currentTarget.dataset.name
              );
            }}
            key={d.value}
            data-value={d.value}
            data-name={d.label}
          >
            {d.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectTwo;
