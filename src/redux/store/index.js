import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainPageReducer from "../reducers/mainPageReducer";
import searchReducer from "../reducers/searchReducer";

const rootReducer = combineReducers({
  mainPage: mainPageReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
