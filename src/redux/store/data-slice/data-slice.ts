import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataModel, FiltersModel, sortbyType } from "../../models/redux-models";
import { characters, charType } from "../../../data/pure-data";
let initialState: DataModel = {
  data: characters,
  filteredData: characters,
  filters: {
    search: "",
    sortby: "Tier",
    affinity: [],
    buffs: [],
    debuffs: [],
    affiliations: [],
    gearSet: [],
    effects: [],
  },
};

const searchChange = (chars: charType[], sString: string): charType[] => {
  return chars.filter((c) => {
    const name = c.name.toLowerCase();
    return name.includes(sString.toLowerCase());
  });
};

const handleSorting = (chars: charType[], sortby: sortbyType): charType[] => {
  const sorbyAffinity = (chars: charType[]): charType[] => {
    return chars.sort((a, b) => b.affinity.localeCompare(a.affinity));
  };
  switch (sortby) {
    case "Tier":
      const s = sorbyAffinity(chars.filter((char) => char.tier == "S"));
      const a = sorbyAffinity(chars.filter((char) => char.tier == "A"));
      const b = sorbyAffinity(chars.filter((char) => char.tier == "B"));
      const c = sorbyAffinity(chars.filter((char) => char.tier == "C"));
      const t = sorbyAffinity(chars.filter((char) => char.tier == "T"));
      const q = sorbyAffinity(chars.filter((char) => char.tier == "?"));

      return [...s, ...a, ...b, ...c, ...t, ...q];

    case "Name":
      return chars.sort((a, b) => a.name.localeCompare(b.name));

    default:
      return chars.sort((a, b) =>
        parseInt(a[sortby]) < parseInt(b[sortby]) ? 1 : -1
      );
  }
};

const handleFilters = (
  chars: charType[],
  filters: FiltersModel
): charType[] => {
  let FilteredData: charType[] = chars;

  if (filters.affinity.length) {
    FilteredData = FilteredData.filter((a) =>
      filters.affinity.includes(a.affinity)
    ).sort((a, b) => b.affinity.localeCompare(a.affinity));
  }

  if (filters.buffs.length) {
    FilteredData = FilteredData.filter(
      (a) =>
        a.CombatEffects.filter((element) => filters.buffs.includes(element))
          .length
    );
  }

  if (filters.debuffs.length) {
    FilteredData = FilteredData.filter(
      (a) =>
        a.CombatEffects.filter((element) => filters.debuffs.includes(element))
          .length
    );
  }

  if (filters.affiliations.length) {
    FilteredData = FilteredData.filter((a) =>
      filters.affiliations.includes(a.Affiliations)
    );
  }

  if (filters.gearSet.length) {
    FilteredData = FilteredData.filter((a) =>
      filters.gearSet.includes(a.GearSet)
    );
  }

  return FilteredData;
};

const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    handleFilterChange(state, action: PayloadAction<FiltersModel>) {
      const temp = state.filters.search;
      state.filters = { ...action.payload };
      state.filters.search = temp;
      console.log(state.filters.search);

      state.filteredData = searchChange(
        handleFilters(state.data, state.filters),
        temp
      );
    },
    handleSearchChange(state, action: PayloadAction<string>) {
      state.filters.search = action.payload;
      state.filteredData = searchChange(
        handleFilters(state.data, state.filters),
        state.filters.search
      );
    },
    handleSortChange(state, action: PayloadAction<sortbyType>) {
      state.filters.sortby = action.payload;
      state.filteredData = handleSorting(
        searchChange(
          handleFilters(state.data, state.filters),
          state.filters.search
        ),
        action.payload
      );
    },
    clearAllFilters(state) {
      state.filters = initialState.filters;
      state.filteredData = state.data;
    },
  },
});

export default DataSlice;
export const {
  handleFilterChange,
  handleSearchChange,
  handleSortChange,
  clearAllFilters,
} = DataSlice.actions;
