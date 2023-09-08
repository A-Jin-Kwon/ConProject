import { combineReducers, createStore } from "redux";

const headerInitialState = {};
const communityInitialState = { currentMenu: "total", isModalClicked: false, content: {}, input: "", selectedConTitle: "", isLoggedin: false };
const TVShowInitialState = {};
const SearchInputInitialState = { input: "" };
const MemberInfomation = { name: "", introduction: "" };

const headerReducer = (state = headerInitialState, action) => {
  return {};
};

const communityReducer = (state = communityInitialState, action) => {
  switch (action.type) {
    case "login": {
      return {
        ...state,
        isLoggedin: true,
      };
    }
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
    // 홈 알람에서 콘 검색을 통해 선택된 콘의 제목
    case "setSelectedConTitle": {
      return {
        ...state,
        selectedConTitle: action.selectedConTitle,
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

const SettingReducer = (state = MemberInfomation, action) => {
  switch (action.type) {
    case "setName": {
      return {
        ...state,
        ...action.name,
      };
    }
    case "setIntroduction": {
      return {
        ...state,
        ...action.introduction,
      };
    }
    case "Multiple_setInfo": {
      return {
        ...state,
        name: action.info.name,
        introduction: action.info.introduction,
      };
    }
    default:
      return MemberInfomation;
  }
};

const rootReducer = combineReducers({
  headerReducer,
  communityReducer,
  TVShowSearchReducer,
  SearchInputReducer,
  SettingReducer,
});

const store = createStore(rootReducer);
export default store;
