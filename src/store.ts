import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
// configureStore() is being used to create and initialize the store with the provided reducer; we’ll add it later.
// To ensure type safety, AppDispatch and RootState typings are defined for the dispatch() and getState() of our store instance.
