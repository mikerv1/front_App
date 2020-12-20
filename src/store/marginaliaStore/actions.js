import { apiContent } from "../../api/api";

export const POSTS_LOADING = 'POSTS_LOADING'
export const POSTS_LOADED = 'POSTS_LOADED'
export const POSTS_FAIL = 'POSTS_FAIL'

// export const load = () => (dispatch) => {
//     dispatch(fetchLoadRequest())
//     apiContent()
//       .then(response => {
//         // const token = response
//         // setTimeout(() => {  // to emulate some network delay
  
//           dispatch(fetchLoginSuccess(response))
//           console.log('response', response)
//           localStorage.setItem("userInfo", JSON.stringify(response))
//           localStorage.setItem("authToken", response.token)
//         // }, 2000)
//       })
//       .catch(error => {
//         dispatch(fetchLoginFailure(error.message))
//         // console.log('error', error.message)
//       })
    
//   }

export const loadPosts = () => (dispatch) => {
    dispatch(fetchPostsRequest())
    apiContent()
    .then(response => {
        dispatch(fetchPostsSuccess(response))
        console.log('response', response)
        // localStorage.setItem("userInfo", JSON.stringify(response))
        // localStorage.setItem("authToken", response.token)
      // }, 2000)
    })
    .catch(error => {
      dispatch(fetchLoginFailure(error.message))
      // console.log('error', error.message)
    })
  }

  export const fetchPostsRequest = () => {
    return {
      type: POSTS_LOADING
    }
  }

  export const fetchPostsSuccess = response => {
    return {
      type: POSTS_LOADED,
      payload: response
    }
  }

  export const fetchPostsFailure = error => {
    return {
      type: POSTS_FAIL,
      payload: error
    }
  }
  