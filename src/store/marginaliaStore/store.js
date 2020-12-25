import React, { createContext, useReducer } from "react";
import {
  POSTS_LOADING,
  POSTS_LOADED,
  POSTS_FAIL
} from '../marginaliaStore/actions'

export const postsInitialState = {
  posts: [],
  loading: false,
  loaded: false,
  error: false
}

export const PostsContext = createContext()

export const postsReducer = (state, action) => {
  switch (action.type) {
    case POSTS_LOADING:
        return {
          ...state,
          loading: true
        }
    case POSTS_LOADED:
      return {
        ...state,
        loading: false,
        loaded: true,
        posts: action.payload
      }
    case POSTS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload
      }
    default:
    return state
  }
}

function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}

function wrapperDispatch(dispatch) {
  return function(action) {
    if (isPromise(action.payload)) {
      dispatch({ type: POSTS_LOADING });
      action.payload.then(data => {
        dispatch({ type: action.type, payload: data });
      });
    } else {
      dispatch(action);
    }
  };
}

export const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, postsInitialState) //postReducer from marginaliaStore/store.js
  return (
    <>
    <PostsContext.Provider value = {{ state, dispatch: wrapperDispatch(dispatch) }}>
      {children}
    </PostsContext.Provider>
    </>
  )
}
