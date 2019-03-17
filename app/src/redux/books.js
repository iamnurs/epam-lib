import * as ActionTypes from "./ActionTypes";

export const Books = (
  state = { isLoading: true, errMess: null, books: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_BOOKS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        books: action.payload
      };
    case ActionTypes.BOOKS_LOADING:
      return { ...state, isLoading: true, errMess: null, books: [] };
    case ActionTypes.BOOKS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, books: [] };
    case ActionTypes.POST_BOOK:
      return {
        ...state,
        books: state.books.concat(action.payload)
      };
    default:
      return state;
  }
};
