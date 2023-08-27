import { combineReducers, createStore } from "redux";

const headerInitialState = {};
const communityInitialState = { currentMenu: "total", isModalClicked: false, content: {}, input: "" };
const TVShowInitialState = {};
const SearchInputInitialState = { input: "" };

const headerReducer = (state = headerInitialState, action) => {
  return {};
};

const communityReducer = (state = communityInitialState, action) => {
  switch (action.type) {
    case "changeMenu": {
      return {
        ...state,
        currentMenu: action.menu,
      };
    }
    case "modalFlip": {
      return {
        ...state,
        isModalClicked: !state.isModalClicked,
      };
    }
    case "Multiple_Modal&ClickedContent": {
      return {
        ...state,
        isModalClicked: !state.isModalClicked,
        content: action.content,
      };
    }
    case "Multiple_Modal&InitCon": {
      return {
        ...state,
        isModalClicked: !state.isModalClicked,
        content: action.content,
      };
    }
    case "Multiple_Modal&HomeSearch": {
      return {
        ...state,
        isModalClicked: true,
        input: action.input,
      };
    }
    case "HomeSearchInput": {
      return {
        ...state,
      };
    }
    default:
      return communityInitialState;
  }
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

const rootReducer = combineReducers({
  headerReducer,
  communityReducer,
  TVShowSearchReducer,
  SearchInputReducer,
});

const store = createStore(rootReducer);
export default store;
