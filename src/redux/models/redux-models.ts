import { charType } from "../../data/pure-data";

/////
export interface settingModel {
  drawer: boolean;
  theme: string;
}

export interface FilterModel {
  category?: string;
  offset: number;
  rating?: string;
  q?: string;
}

export interface filtersModel {
  search: string;
  sortby: string;
  affinity: string[];
  buffs: string[];
  debuffs: string[];
  affiliations: string[];
  gearset: string[];
}

export interface DataModel {
  data: charType[];
  filteredData: charType[];
  filters: filtersModel;
}
