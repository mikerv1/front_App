import React, { createContext, useContext, useState, useReducer } from "react";
import {
  POSTS_LOADING,
  POSTS_LOADED,
  POSTS_FAIL
} from '../marginaliaStore/actions'

// const TodosContext = createContext([]);

// const reducer = (state = [], action = {}) => {
//   return {
//     ...state,
//     newState: true
//   };
// };

// export function TodosProvider({ children, todos }) {
  /**
   * todos - начальное состояние
   * reducer - редьюсер
   * dispatch - метод, принимающий action
   * state - состояние, изменяемое reducerом
   */
//   const [state, dispatch] = useReducer(reducer, todos);
//   console.log('state', state)
//   console.log('dispatch', dispatch)
//   return (
//     <TodosContext.Provider value={[state, dispatch]}>
//       {children}
//     </TodosContext.Provider>
//   );
// }

// export const useTodosStore = () => useContext(TodosContext);

// #########################################################

const postsInitialState = {
  posts: [],
  loading: false,
  loaded: false,
  error: false
}

const PostsContext = createContext({})

const postsReducer = (state = postsInitialState, action) => {
  switch (action.type) {
    case POSTS_LOADING:
        return {
          ...state,
          loading: true,
          posts: action.payload
        }
    case POSTS_LOADED:
      return {
        ...state,
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

export function PostsProvider({ children }) {
  const [state, dispatch] = useReducer(postsReducer, postsInitialState)
  //  console.log('state in PostProvider', dispatch)
  return (
    <PostsContext.Provider value = {[state, dispatch]}>
      {children}
    </PostsContext.Provider>
  )
}

export const usePostsStore = () => useContext(PostsContext)

