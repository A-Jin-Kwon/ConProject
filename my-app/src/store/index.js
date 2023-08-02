import { combineReducers, createStore } from "redux";

const headerInitialState = {};
const communityInitialState = { currentMenu: "total", isModalClicked: false };
const TVShowInitialState = {};

const headerReducer = (state = headerInitialState, action) => {
  return {};
};

const communityReducer = (state = communityInitialState, action) => {
  if (action.type === "changeMenu") {
    return {
      ...state,
      currentMenu: action.menu,
    };
  } else if (action.type === "modalFlip") {
    return {
      ...state,
      isModalClicked: !state.isModalClicked,
    };
  } else return communityInitialState;
};

const TVShowSearchReducer = (state = TVShowInitialState, action) => {
  if (action.type === "loadTVShow") {
    return {
      ...action.tvShow,
    };
  } else return TVShowInitialState;
};

const rootReducer = combineReducers({
  headerReducer,
  communityReducer,
  TVShowSearchReducer,
});

const store = createStore(rootReducer);
export default store;
