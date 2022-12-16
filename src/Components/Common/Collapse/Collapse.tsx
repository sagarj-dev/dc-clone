import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import "./Collapse.scss";

type CollapseType = {
  title: string;
  children: React.ReactNode;
  defaultOpenState?: boolean;
};

const Collapse = ({ title, children, defaultOpenState }: CollapseType) => {
  const [open, setOpen] = React.useState(defaultOpenState);

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={() => setOpen(!open)}>
        <p>{title}</p>

        <AiFillCaretDown
          className={`${
            open ? "collapse-icon collapse-icon-rotate" : "collapse-icon"
          }`}
        />
      </div>
      <div
        className={`${
          open ? "collapse-content collapse-open" : "collapse-content"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
