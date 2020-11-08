// pageAction
export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'

export function getPhotos(year) {
  return dispatch => {
    // экшен с типом REQUEST (запрос начался)
    // диспатчится сразу, как будто-бы перед реальным запросом
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year,
    })

    // а экшен внутри setTimeout
    // диспатчится через секунду
    // как будто-бы в это время
    // наши данные загружались из сети
    setTimeout(() => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: [1, 2, 3, 4, 5],
      })
    }, 1000)
  }
}
// dispatch reducer
import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../actions/PageActions'

const initialState = {
  year: 2018,
  photos: [],
  isFetching: false, // изначально статус загрузки - ложь
  // так как он станет true, когда запрос начнет выполнение
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, year: action.payload, isFetching: true }

    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, isFetching: false }

    default:
      return state
  }
}

// use

//Login

const dispatch = useDispatch();
const userLogin = useSelector((state) => state.userLogin);

const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password));
 
  };