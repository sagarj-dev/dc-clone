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
  const heightRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (heightRef.current != null) {
      if (open) {
        heightRef.current.style.maxHeight =
          heightRef.current.scrollHeight + "px";
      } else {
        heightRef.current.style.maxHeight = "0px";
      }
    }
  }, [open]);

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
        // className={`${
        //   open ? "collapse-content collapse-open" : "collapse-content"
        // }`}
        className="collapse-content"
        ref={heightRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
