import React from "react";
import "./CharCollapse.scss";
import { FaHandRock } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

const CharCollapse = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="char-collapse-container">
      <div className="char-collapse-header" onClick={() => setOpen(!open)}>
        <div className="char-collapse-basicDetails">
          <div className="char-image-main">
            <p>S</p>
            <img src="/images/characters/azrael.png" alt="asd" />
          </div>
          <div className="char-name">
            <div>
              <h5>Azrael</h5>
              <FaHandRock />
            </div>
            <p>The Avenging Angel</p>
          </div>
        </div>

        <AiFillCaretDown
          className={`${
            open ? "collapse-icon collapse-icon-rotate" : "collapse-icon"
          }`}
        />
      </div>
      <div
        className={`${
          open
            ? "char-collapse-content char-collapse-open"
            : "char-collapse-content"
        }`}
      >
        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ea
        error hic ut, officiis, magnam unde autem ipsam quo amet, inventore
        saepe cupiditate repellat animi harum reprehenderit commodi ullam. Quas. */}
      </div>
    </div>
  );
};

export default CharCollapse;
