import { apiContent } from "../../api/api";

export const POSTS_LOADING = 'POSTS_LOADING'
export const POSTS_LOADED = 'POSTS_LOADED'
export const POSTS_FAIL = 'POSTS_FAIL'

// ########## getPosts ################

export const getPosts = {
  type: POSTS_LOADED,
  payload: apiContent() // return Promise from api/api
}