import { combineReducers, createStore } from "redux";

const headerInitialState = {};
const communityInitialState = { currentMenu: "total", isModalClicked: false };
const TVShowInitialState = {};
const SearchInputInitialState = { input: "" };
const ConAddInitialState = { content: {} };

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
      ...state,
      ...action.tvShow,
    };
  } else return TVShowInitialState;
};

const SearchInputReducer = (state = SearchInputInitialState, action) => {
  if (action.type === "newInput") {
    return {
      input: action.input,
    };
  } else return SearchInputInitialState;
};

const ConAddReducer = (state = ConAddInitialState, action) => {
  if (action.type === "addCon") {
    return {
      content: action.content,
    };
  } else if (action.type === "initCon") {
    return {
      content: {},
    };
  } else return ConAddInitialState;
};

const rootReducer = combineReducers({
  headerReducer,
  communityReducer,
  TVShowSearchReducer,
  SearchInputReducer,
  ConAddReducer,
});

const store = createStore(rootReducer);
export default store;
