import React, { useEffect, useState } from "react";
import { rankTotals, rankTotalsType } from "../../../../data/data";
import SelectTwo from "../../../Common/Select/selectTwo";
import "./FragsCalculator.scss";

const data0 = [
  { label: "No Star", value: "no-stars" },
  { label: "Rank 1", value: "rank-1" },
  { label: "Rank 2", value: "rank-2" },
  { label: "Rank 3", value: "rank-3" },
  { label: "Rank 4", value: "rank-4" },
  { label: "Rank 5", value: "rank-5" },
  { label: "Legendary 1", value: "legendary-1" },
  { label: "Legendary 2", value: "legendary-2" },
  { label: "Legendary 3", value: "legendary-3" },
  { label: "Legendary 4", value: "legendary-4" },
  { label: "Legendary 5", value: "legendary-5" },
  { label: "Rebirth 1", value: "rebirth-1" },
  { label: "rebirth-2", value: "rebirth-2" },
  { label: "Rebirth 3", value: "rebirth-3" },
  { label: "Rebirth 4", value: "rebirth-4" },
  { label: "Rebirth 5", value: "rebirth-5" },
];

const calculate = (lvl: rankTotalsType, frags: number): number[] => {
  let start = false;
  let arr: number[] = [];
  let diff = rankTotals[lvl][0];
  for (var ranks in rankTotals) {
    if (lvl !== ranks && !start) {
      arr.push(0);
    } else {
      start = true;
      let rank = ranks as rankTotalsType;
      if (frags > rankTotals[rank][0]) {
        arr.push(0);
      } else {
        arr.push(rankTotals[rank][0] - frags - diff);
      }
    }
  }
  arr.forEach((a, i) => {
    if (a < 0) {
      arr[i] = 0;
    }
  });
  // arr.shift();
  return arr;
};

const FragsCalculator = () => {
  const [currentRank, setCurrentRank] = useState<rankTotalsType>("no-stars");
  const [frags, setFrags] = useState(0);
  const [err, setErr] = useState(false);
  const [tableData, settableData] = useState<number[]>([]);

  useEffect(() => {
    settableData(calculate(currentRank, frags));
  }, [currentRank, frags]);

  return (
    <div className="GearCalculator">
      <h5>Fragment Calculator</h5>
      <p>
        The chart below shows the fragment totals for ranking up a character.
      </p>
      <p>
        Enter the current rank and number of fragments you have for a character
        to see how many more you need for the next rank!
      </p>

      <div className="gearcContainer">
        <div className="gearc-options ">
          <h5>Current Rank</h5>
          <SelectTwo
            data={data0}
            key={1}
            title="select"
            onChangeValue={(v) => setCurrentRank(v as rankTotalsType)}
          />
          <br />
          <h5>Number of fragments</h5>
          <input
            type="number"
            value={frags}
            onChange={(e) => {
              setFrags(parseInt(e.target.value));
            }}
          />
        </div>
        <div className="gearcResult">
          {!err && tableData.length > 0 ? (
            <table className="table">
              <thead className="table-header">
                <tr>
                  <th>For Rank</th>
                  <th>You Need</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((d, i) => (
                  <>
                    {i > 0 && (
                      <tr>
                        <td>{data0[i]?.label}</td>
                        <td>{d ? d : "✔"}</td>
                      </tr>
                    )}
                  </>
                ))}
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

export default FragsCalculator;
