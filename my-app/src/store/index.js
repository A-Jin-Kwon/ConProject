import { combineReducers, createStore } from "redux";

const headerInitialState = {};
const communityInitialState = { currentMenu: "total" };

const headerReducer = (state = headerInitialState, action) => {
  return {};
};

const communityReducer = (state = communityInitialState, action) => {
  if (action.type === "changeMenu") {
    return {
      currentMenu: action.menu,
    };
  } else return communityInitialState;
};

const rootReducer = combineReducers({
  headerReducer,
  communityReducer,
});

const store = createStore(rootReducer);
export default store;
