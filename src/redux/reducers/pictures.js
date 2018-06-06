import { FETCH_PICTURES_FAILED, FETCH_PICTURES_PENDING, FETCH_PICTURES_SUCCESS } from '../actions/pictures'


export default (state=[], action) => {
  switch(action.type){
    case FETCH_PICTURES_PENDING:
      return state
    case FETCH_PICTURES_SUCCESS:
      return [...action.payload.data]
    case FETCH_PICTURES_FAILED:
      return action.payload
    default:
      return state
  }
}
