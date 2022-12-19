import { configureStore } from "@reduxjs/toolkit";
import SettingSlice from "./setting-slice/setting-slice";
import DataSlice from "./data-slice/data-slice";

const store = configureStore({
  reducer: {
    settings: SettingSlice.reducer,
    data: DataSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
