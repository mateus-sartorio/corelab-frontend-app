import { configureStore } from "@reduxjs/toolkit";
import appStateSlice from "./features/todosSlice";

export const store = configureStore({
  reducer: {
    appState: appStateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
