import { FETCH_POSTS_FAILED, FETCH_POSTS_PENDING, FETCH_POSTS_SUCCESS, ADD_POSTS_FAILED, ADD_POSTS_PENDING, ADD_POSTS_SUCCESS, DELETE_POSTS_FAILED, DELETE_POSTS_PENDING, DELETE_POSTS_SUCCESS, POST_TWEET_PENDING, POST_TWEET_SUCCESS, POST_TWEET_FAILED, UPDATE_POST_FAILED, UPDATE_POST_PENDING, UPDATE_POST_SUCCESS} from '../actions/posts'


export default (state = [], action) =>  {
  switch(action.type){
    case FETCH_POSTS_PENDING:
      return state
    case FETCH_POSTS_SUCCESS:
      return [...action.payload.data]
    case FETCH_POSTS_FAILED:
      return action.payload
    case ADD_POSTS_PENDING:
      return state
    case ADD_POSTS_SUCCESS:
      return [...state, ...action.payload.data]
    case ADD_POSTS_FAILED:
      return action.payload
    case DELETE_POSTS_PENDING:
       return state
    case DELETE_POSTS_SUCCESS:
      return action.payload.data
    case DELETE_POSTS_FAILED:
       return action.payload
    case POST_TWEET_PENDING:
       return state
    case POST_TWEET_SUCCESS:
       return [...state, action.payload.data]
    case POST_TWEET_FAILED:
       return action.payload
    case UPDATE_POST_PENDING:
       return state
    case UPDATE_POST_SUCCESS:
       return action.payload.data
    case UPDATE_POST_FAILED:
       return action.payload
    default:
      return state
  }
}
