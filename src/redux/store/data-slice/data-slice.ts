import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataModel, filtersModel } from "../../models/redux-models";
import { characters, charType } from "../../../data/pure-data";
let initialState: DataModel = {
  data: characters,
  filteredData: characters,
  filters: {
    search: "",
    sortby: "tier",
    affinity: [],
    buffs: [],
    debuffs: [],
    affiliations: [],
    gearset: [],
  },
};

const searchChange = (chars: charType[], sString: string): charType[] => {
  return chars.filter((c) => {
    const name = c.name.toLowerCase();
    return name.includes(sString.toLowerCase());
  });
};

// const handleSorting = (chars: charType[], sortby: string): charType[] => {
//   switch (sortby) {
//     case "Tier":
//       const s = chars.filter((char) => char.tier == "s");
//       const a = chars.filter((char) => char.tier == "a");
//       const b = chars.filter((char) => char.tier == "b");
//       const c = chars.filter((char) => char.tier == "c");
//       const t = chars.filter((char) => char.tier == "t");
//       const q = chars.filter((char) => char.tier == "?");
//       return [...s, ...a, ...b, ...c, ...t, ...q];
//       break;
//     case "Name":
//       return chars.sort((a, b) => a.name.localeCompare(a.name));

//       break;
//     case "Speed":
//       return chars.sort(function(a,b) {

//       });

//       break;
//     case "HP":
//       return chars.sort((a, b) => a.HP.localeCompare(a.HP));

//       break;
//     case "STR":
//       return chars.sort((a, b) => a.HP.localeCompare(a.HP));

//       break;
//     case "INT":
//       return chars.sort((a, b) => a.INT.localeCompare(a.INT));

//       break;

//     default:
//       return chars;
//       break;
//   }
// };

const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    handleFilterChange(state, action: PayloadAction<filtersModel>) {
      state.filters = { ...action.payload };
    },
    handleSearchChange(state, action: PayloadAction<string>) {
      state.filters.search = action.payload;
      state.filteredData = searchChange(state.data, state.filters.search);
    },
  },
});

export default DataSlice;
export const { handleFilterChange, handleSearchChange } = DataSlice.actions;
