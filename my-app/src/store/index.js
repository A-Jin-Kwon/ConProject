import { combineReducers, createStore } from "redux";

const headerInitialState = {};
const communityInitialState = { currentMenu: "total", isModalClicked: false, content: {}, input: "", selectedConTitle: "", selectedConId: 0 };
const TVShowInitialState = {};
const SearchInputInitialState = { input: "" };
const LoginState = { isLoggedIn: false };
const MemberInfomation = { name: "", introduction: "" };

const headerReducer = (state = headerInitialState, action) => {
  return {};
};

const communityReducer = (state = communityInitialState, action) => {
  switch (action.type) {
    case "setMenu": {
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
        selectedConId: action.selectedConId,
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
      return state;
  }
};

const LoginReducer = (state = LoginState, action) => {
  switch (action.type) {
    case "login": {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    default:
      return state;
  }
};

const TVShowSearchReducer = (state = TVShowInitialState, action) => {
  if (action.type === "loadTVShow") {
    return {
      ...state,
      ...action.tvShow,
    };
  } else return state;
};

const SearchInputReducer = (state = SearchInputInitialState, action) => {
  switch (action.type) {
    case "newInput": {
      return {
        ...state,
        input: action.input,
      };
    }
    default:
      return state;
  }
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
      return state;
  }
};

const rootReducer = combineReducers({
  headerReducer,
  communityReducer,
  TVShowSearchReducer,
  SearchInputReducer,
  SettingReducer,
  LoginReducer,
});

const store = createStore(rootReducer);
export default store;
