import { FETCH_BUTTONS_FAILED, FETCH_BUTTONS_PENDING, FETCH_BUTTONS_SUCCESS} from '../actions/buttons';


export default (state = [], action) => {
  switch(action.type){
    case FETCH_BUTTONS_PENDING:
     return state
    case FETCH_BUTTONS_SUCCESS:
    console.log('action:',action)
     return [...state, ...action.payload.data]
    case FETCH_BUTTONS_FAILED:
      return action.payload
    default:
      return state
  }

}
