import { FETCH_POSTS_FAILED, FETCH_POSTS_PENDING, FETCH_POSTS_SUCCESS, ADD_POSTS_FAILED, ADD_POSTS_PENDING, ADD_POSTS_SUCCESS, DELETE_POSTS_FAILED, DELETE_POSTS_PENDING, DELETE_POSTS_SUCCESS } from '../actions/posts'


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
      const posts = state.posts.filter(post => post.id != action.id)
      return posts
    case DELETE_POSTS_FAILED:
       return action.payload
    default:
      return state
  }
}