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


  const partial = (fn, x) => (...args) => fn(x, ...args)

  const partial = (fn, ...args) => (...rest) => fn(...args.concat(rest))

  const sum4 = (a, b, c, d) => (a + b + c + d)

  const f11 = partial(sum4, 1)
  const f12 = partial(f11, 2)
  const f13 = partial(f12, 3)
  const y1 = f13(4)
  console.log(y1)

  const f21 = partial(sum4, 1, 2)
  const f22 = partial(f21, 3)
  const y2 = f22(4)
  console.log(y2)


// ########### true curry ############
  const curry = fn => (...args) => {
    if (fn.length > args.length) {
      const f= fn.bind(null, ...args)
      return curry(f)      
    } else {
      return fn(...args)
    }
  }

  const sum4 = (a, b, c, d) => (a + b + c + d)

  const f = curry(sum4)

  // ############ carry ##########

const log1 = (x) => (y) => x + y

const log2 = function(x) {
  return function(y) {
    return x + y
  }
}

console.log(log1(1)(2))



// #############################
