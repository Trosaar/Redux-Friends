import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAIL} from './actions'

const initialState = {
  stuff:[]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_PENDING: {
      return {
        ...state,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
      }
    }
    case LOGIN_FAIL: {
      return {
        ...state,
      }
    }
    default: {
      return state
    }
  }
}
