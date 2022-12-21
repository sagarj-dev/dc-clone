import React, { useEffect, useState } from "react";
import { gearTable } from "../../../../data/data";
import SelectTwo from "../../../Common/Select/selectTwo";
import "./GearCalculator.scss";

const data0 = [
  { label: "0", value: "0" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
];
const data1 = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
];

// type indexes = 1|2|3|4|5|6|7|8|9|10|11|12
const calculate = (start: number, end: number) => {
  let pieceTotals = {
    mat1: { lvl1: 0, lvl2: 0, lvl3: 0 },
    mat2: { lvl1: 0, lvl2: 0, lvl3: 0 },
    mat3: { lvl1: 0, lvl2: 0, lvl3: 0 },
    mat4: { lvl1: 0, lvl2: 0, lvl3: 0 },
    esnc: { lvl1: 0, lvl2: 0, lvl3: 0 },
  };

  for (var i = start; i < end; i++) {
    var materialRow = gearTable[i];

    for (var material in materialRow) {
      if (
        material === "mat1" ||
        material === "mat2" ||
        material === "mat3" ||
        material === "mat4" ||
        material === "esnc"
      ) {
        var levels = materialRow[material];
        for (var level in levels) {
          if (level === "lvl1" || level === "lvl2" || level === "lvl3") {
            pieceTotals[material][level] += levels[level] * 1;
          }
        }
      }
    }
  }

  return pieceTotals;
};

const GearCalculator = () => {
  const [currentLvl, setCurrentLvl] = useState(0);
  const [goalLvl, setGoalLvl] = useState(0);
  const [err, setErr] = useState(false);
  const [tableData, settableData] = useState({
    mat1: { lvl1: 0, lvl2: 0, lvl3: 0 },
    mat2: { lvl1: 0, lvl2: 0, lvl3: 0 },
    mat3: { lvl1: 0, lvl2: 0, lvl3: 0 },
    mat4: { lvl1: 0, lvl2: 0, lvl3: 0 },
    esnc: { lvl1: 0, lvl2: 0, lvl3: 0 },
  });

  useEffect(() => {
    if (goalLvl <= currentLvl) {
      setErr(true);
    } else {
      settableData(calculate(currentLvl, goalLvl));
      setErr(false);
    }
  }, [currentLvl, goalLvl]);

  return (
    <div className="GearCalculator">
      <h5>Gear Material Calculator</h5>
      <p>
        Enter the current gear level for a character and desired gear level to
        see how many materials are needed to get there.
      </p>

      <div className="gearcContainer">
        <div className="gearc-options">
          <h5>Current Gear Level</h5>
          <SelectTwo
            data={data0}
            key={1}
            title="0"
            onChangeValue={(v) => setCurrentLvl(parseInt(v))}
          />
          <br />
          <h5>Goal Gear Level</h5>
          <SelectTwo
            data={data1}
            key={2}
            title="Goal Gear Level"
            onChangeValue={(v) => setGoalLvl(parseInt(v))}
          />
        </div>
        <div className="gearcResult">
          {!err ? (
            <table className="table">
              <thead className="table-header">
                <tr>
                  <th>MATERIAL</th>
                  <th>LVL 1</th>
                  <th>LVL 2</th>
                  <th>LVL 3</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row">
                  <td>
                    <img src="https://dcltoolkit.com/img/material-1.png" />
                  </td>
                  <td>{tableData.mat1.lvl1}</td>
                  <td>{tableData.mat1.lvl2}</td>
                  <td>{tableData.mat1.lvl3}</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://dcltoolkit.com/img/material-2.png" />
                  </td>
                  <td>{tableData.mat2.lvl1}</td>
                  <td>{tableData.mat2.lvl2}</td>
                  <td>{tableData.mat2.lvl3}</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://dcltoolkit.com/img/material-3.png" />
                  </td>
                  <td>{tableData.mat3.lvl1}</td>
                  <td>{tableData.mat3.lvl2}</td>
                  <td>{tableData.mat3.lvl3}</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://dcltoolkit.com/img/material-4.png" />
                  </td>
                  <td>{tableData.mat4.lvl1}</td>
                  <td>{tableData.mat4.lvl2}</td>
                  <td>{tableData.mat4.lvl3}</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://dcltoolkit.com/img/essence.png" />
                  </td>
                  <td>{tableData.esnc.lvl1}</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          ) : (
            <h5>Please Select Diffrent Options....</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default GearCalculator;
