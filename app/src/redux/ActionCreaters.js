import { AccessToken, LoginManager } from "react-native-fbsdk";

import * as ActionTypes from "./ActionTypes";

const baseUrl = "https://epam-lib.herokuapp.com/api/";

export const facebookAuth = () => async dispatch => {
  dispatch(requestLogin({}));
  const res = await LoginManager.logInWithReadPermissions(["public_profile"]);
  if (res.isCancelled) {
    dispatch(loginError({}));
    return "Login cancelled";
  }
  const tokenFromFb = await AccessToken.getCurrentAccessToken();
  const tokenToString = await tokenFromFb.accessToken.toString();
  const token = await fetch(baseUrl + `users/facebook/token`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenToString}`
    }
  });
  const response = await token.json();
  dispatch(receiveLogin(response));
};

export const loginUser = creds => dispatch => {
  dispatch(requestLogin(creds));
  console.log(creds);
  return fetch(baseUrl + "users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(creds)
  })
    .then(
      response => {
        if (response.ok) return response;
        else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        throw error;
      }
    )
    .then(response => response.json())
    .then(response => {
      console.log(response);
      if (response.success) {
        dispatch(receiveLogin(response));
        console.log(response.token);
      } else {
        var error = new Error("Error " + response.status);
        error.response = response;
        throw error;
      }
    })
    .catch(error => dispatch(loginError(error.message)));
};

export const registerUser = creds => dispatch => {
  dispatch(requestLogin(creds));
  console.log(creds);
  return fetch(baseUrl + "users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(creds)
  })
    .then(
      response => {
        if (response.ok) return response;
        else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        throw error;
      }
    )
    .then(response => response.json())
    .then(response => {
      console.log(response);
      if (response.success) {
        dispatch(receiveLogin(response));
        console.log(response.token);
      } else {
        var error = new Error("Error " + response.status);
        error.response = response;
        throw error;
      }
    })
    .catch(error => dispatch(loginError(error.message)));
};

export const requestLogin = creds => {
  return {
    type: ActionTypes.LOGIN_REQUEST,
    creds
  };
};

export const receiveLogin = response => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    token: response.token,
    user: response.user
  };
};

export const loginError = message => {
  return {
    type: ActionTypes.LOGIN_FAILURE,
    message
  };
};

export const fetchBooks = () => dispatch => {
  dispatch(booksLoading(true));

  return fetch(baseUrl + "books")
    .then(
      response => {
        if (response.ok) return response;
        else {
          var error = new Error(
            "Error" + response.status + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(books => dispatch(addBooks(books)))
    .catch(error => dispatch(booksFailed(error.message)));
};

export const booksLoading = () => ({
  type: ActionTypes.BOOKS_LOADING
});

export const booksFailed = err => ({
  type: ActionTypes.BOOKS_FAILED,
  payload: err
});

export const addBooks = books => ({
  type: ActionTypes.ADD_BOOKS,
  payload: books
});

export const postBook = obj => dispatch => {
  const newBook = obj.newBook;
  return fetch(baseUrl + "books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${obj.token}`
    },
    body: JSON.stringify(newBook)
  })
    .then(
      response => {
        if (response.ok) return response;
        else {
          var error = new Error(
            "Error" + response.status + ":" + response.statusText
          );
          console.warn(response);
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(book => dispatch(addBook(book)))
    .catch(error => dispatch(booksFailed(error.message)));
};

export const addBook = book => ({
  type: ActionTypes.POST_BOOK,
  payload: book
});
