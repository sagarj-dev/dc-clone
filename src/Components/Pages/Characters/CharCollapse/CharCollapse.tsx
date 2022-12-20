import React from "react";
import "./CharCollapse.scss";
import { FaHandRock } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { charType } from "../../../../data/pure-data";

type CharCollapseType = { chardata: charType };

const CharCollapse = ({ chardata }: CharCollapseType) => {
  const [open, setOpen] = React.useState(false);

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
    <div
      className={`char-collapse-container clr-${chardata.affinity.toLowerCase()}`}
    >
      <div className="char-collapse-header" onClick={() => setOpen(!open)}>
        <div className="char-collapse-basicDetails">
          <div className="char-image-main">
            <p>{chardata.tier}</p>
            <img
              src={`https://dcltoolkit.com/img/characters/basic/${chardata.subName
                .toLowerCase()
                .replaceAll("'", "")
                .replaceAll(" ", "_")}.png?v=2`}
              alt="asd"
            />
          </div>
          <div className="char-name">
            <div>
              <h5>{chardata.name}</h5>
              <FaHandRock />
            </div>
            <p>{chardata.subName}</p>
          </div>
        </div>

        <AiFillCaretDown
          className={`${
            open ? "collapse-icon collapse-icon-rotate" : "collapse-icon"
          }`}
        />
      </div>
      <div className="char-collapse-content" ref={heightRef}>
        {/* <div className="otherLook">
          <span>Other Looks</span>
          <div>
            <img src="/images/characters/azrael-l.png" alt="asd" />
            <img src="/images/characters/azrael-1.png" alt="asd" />
          </div>
        </div> */}
        <div className="char-data">
          <div>
            <h5>SPD</h5>
            <p>{chardata.SPD}</p>
          </div>
          <div>
            <h5>HP</h5>
            <p>{chardata.HP}</p>
          </div>
          <div>
            <h5>STR</h5>
            <p>{chardata.STR}</p>
          </div>
          <div>
            <h5>INT</h5>
            <p>{chardata.INT}</p>
          </div>
          <div>
            <h5>AG</h5>
            <p>{chardata.AG}</p>
          </div>
          <div>
            <h5>STAM</h5>
            <p>{chardata.STAM}</p>
          </div>
          <div>
            <h5>CR C</h5>
            <p>{chardata.CRC}</p>
          </div>
          <div>
            <h5>CR V</h5>
            <p>{chardata.CRV}</p>
          </div>
        </div>
        <div className="legendary-order">
          <h5>Legendary Order</h5>
          <p>{chardata.LegendaryOrder}</p>
        </div>
        <div className="gear-set">
          <h5>Gear Set</h5>
          <p>{chardata.GearSet}</p>
        </div>
        <div className="powers">
          <h5>Powers</h5>
          <div className="power">
            <h5>{chardata.powers.one.name} </h5>
            <p>
              {chardata.powers.one.dis.Default} <h5>Legendary:</h5>{" "}
              {chardata.powers.one.dis.Legendary}
            </p>
          </div>
          <div className="power">
            <h5>{chardata.powers.two.name} </h5>
            <p>
              {chardata.powers.two.dis.Default} <h5>Legendary:</h5>{" "}
              {chardata.powers.two.dis.Legendary}
            </p>
          </div>
          <div className="power">
            <h5>{chardata.powers.three.name} </h5>
            <p>
              {chardata.powers.three.dis.Default} <h5>Legendary:</h5>{" "}
              {chardata.powers.three.dis.Legendary}
            </p>
          </div>
          <div className="power">
            <h5>{chardata.powers.four.name} </h5>
            <p>
              {chardata.powers.four.dis.Default} <h5>Legendary:</h5>{" "}
              {chardata.powers.four.dis.Legendary}
            </p>
          </div>
          <div className="power">
            <h5>{chardata.powers.five.name} </h5>
            <p>
              {chardata.powers.five.dis.Default} <h5>Legendary:</h5>{" "}
              {chardata.powers.five.dis.Legendary}
            </p>
          </div>
        </div>
        <div className="combat-effects">
          <h5>Combat Effects</h5>
          <p>{chardata.CombatEffects.join(", ")}</p>
        </div>
        <div className="affiliations">
          <h5>Affiliations</h5>
          <p>{chardata.Affiliations}</p>
        </div>
      </div>
      <div
        className="hr"
        style={{
          borderTop: `1px solid var(--clr-${chardata.affinity.toLowerCase()})`,
        }}
      ></div>
    </div>
  );
};

export default CharCollapse;
