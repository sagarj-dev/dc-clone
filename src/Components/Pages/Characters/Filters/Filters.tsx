import React from "react";
import CheckBoxButton from "../../../Common/CheckBoxButton";
import Collapse from "../../../Common/Collapse/Collapse";
import Divider from "../../../Common/Divider/Divider";
import RadioButton from "../../../Common/RadioButton";
import {
  sortByData,
  affiliationsData,
  buffsData,
  affinityData,
  damageTypeData,
  debuffsData,
  effectsData,
  gearsetData,
} from "../../../../data/data";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../redux/hooks/redux-hooks";
import {
  handleSortChange,
  handleFilterChange as hfs,
} from "../../../../redux/store/data-slice/data-slice";
import {
  FiltersModel,
  sortbyType,
} from "../../../../redux/models/redux-models";

const Filters = () => {
  const [filters, setFilters] = React.useState<FiltersModel>({
    search: "",
    sortby: "Tier",
    affinity: [],
    buffs: [],
    debuffs: [],
    effects: [],
    affiliations: [],
    gearSet: [],
  });
  const mainstate = useAppSelector((state) => state.data.filters);
  const dispatch = useAppDispatch();

  const handleFilterChange = (
    filter: string,
    value: string | string[]
  ): void => {
    setFilters({ ...filters, [filter]: value });
    if (filter == "sortby") {
      dispatch(handleSortChange(value as sortbyType));
    } else {
      dispatch(hfs({ ...filters, [filter]: value, search: "" }));
    }
  };

  React.useEffect(() => {
    setFilters({
      search: "",
      sortby: "Tier",
      affinity: [],
      buffs: [],
      debuffs: [],
      effects: [],
      affiliations: [],
      gearSet: [],
    });
  }, [mainstate]);
  return (
    <div>
      <Collapse title="SORT">
        <RadioButton
          label="sortby"
          data={sortByData}
          onChangeValue={handleFilterChange}
        />
      </Collapse>
      <Collapse title="Affinity">
        <div>
          {/* <RadioButton
            label="leader"
            data={[{ label: "Leader", value: "leader" }]}
            onChangeValue={handleFilterChange}
          />
          <Divider /> */}

          <CheckBoxButton
            label="affinity"
            data={affinityData}
            onChangeValue={handleFilterChange}
          />
          <Divider />
          {/* <p>Damage Type</p> */}
          {/* <RadioButton
            label="damageType"
            data={damageTypeData}
            onChangeValue={handleFilterChange}
          />
          <Divider /> */}
          {/* <p>Provenance</p>
          <RadioButton
            label="provenance"
            data={[
              { label: "Alien", value: "Alien" },
              { label: "Earthling", value: "Earthling" },
            ]}
            onChangeValue={handleFilterChange}
          />
          <Divider />
          <p>Gender</p>
          <RadioButton
            label="gender"
            data={[
              { label: "Male", value: "Male" },
              { label: "Female", value: "Female" },
            ]}
            onChangeValue={handleFilterChange}
          />
          <Divider />
          <p>Morality</p>
          <RadioButton
            label="morality"
            data={[
              { label: "Hero", value: "Hero" },
              { label: "Villain", value: "Villain" },
            ]}
            onChangeValue={handleFilterChange}
          />
          <Divider /> */}
        </div>
      </Collapse>
      <Collapse title="Buffs">
        <CheckBoxButton
          label="buffs"
          data={buffsData}
          onChangeValue={handleFilterChange}
        />
      </Collapse>
      <Collapse title="Debuffs">
        <CheckBoxButton
          label="debuffs"
          data={debuffsData}
          onChangeValue={handleFilterChange}
        />
      </Collapse>
      <Collapse title="Effects">
        <CheckBoxButton
          label="effects"
          data={effectsData}
          onChangeValue={handleFilterChange}
        />
      </Collapse>
      <Collapse title="Affiliations">
        <CheckBoxButton
          label="affiliations"
          data={affiliationsData}
          onChangeValue={handleFilterChange}
        />
      </Collapse>
      <Collapse title="Gear Set">
        <CheckBoxButton
          label="gearSet"
          data={gearsetData}
          onChangeValue={handleFilterChange}
        />
      </Collapse>
    </div>
  );
};

export default Filters;
