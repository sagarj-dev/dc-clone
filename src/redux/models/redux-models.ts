import { charType } from "../../data/pure-data";

/////
export interface settingModel {
  drawer: boolean;
  theme: string;
}

export type sortbyType = "Tier" | "Name" | "SPD" | "HP" | "STR" | "INT";

export interface FiltersModel {
  search: string;
  sortby: "Tier" | "Name" | "SPD" | "HP" | "STR" | "INT";
  affinity: string[];
  buffs: string[];
  effects: string[];
  debuffs: string[];
  affiliations: string[];
  gearSet: string[];
}

export interface DataModel {
  data: charType[];
  filteredData: charType[];
  filters: FiltersModel;
}
