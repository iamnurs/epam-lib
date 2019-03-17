import * as ActionTypes from "./ActionTypes";

export const User = (
  state = {
    isLoading: false,
    isAuthenticated: false,
    user: "",
    token: "",
    errMess: null
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return { ...state, isLoading: true, isAuthenticated: false };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        errMess: "",
        token: action.token,
        user: action.user
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        errMess: action.message
      };
    case ActionTypes.POST_BOOK:
      new_user = {
        ...state.user,
        book: [state.user.books.concat(action.payload)]
      };
      return {
        ...state,
        user: new_user
      };
      case ActionTypes.NOTIFY:
      new_user = {
        ...state.user,
        requests: [state.user.requests.concat(action.payload)]
      };
      return {
        ...state,
        user: new_user
      };
    default:
      return state;
  }
};
