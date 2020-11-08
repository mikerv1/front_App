import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
    userLogin: userLoginReducer
})

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// const userLoginReducer = (state = {}, action) => {
//     switch (action.type) {
//         //
//       default:
//         return state
//     }
//   }

//   const reducer = combineReducers({
//     userLogin: userLoginReducer})


// const reducer = () => {};

// // const initialState = {};

// const store = createStore(reducer);

// export default store;
