import axios from 'axios';

export const FETCH_POSTS_PENDING = "FETCH_POSTS_PENDING"
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const FETCH_POSTS_FAILED = "FETCH_POSTS_FAILED"


export const ADD_POSTS_PENDING = "ADD_POSTS_PENDING"
export const ADD_POSTS_SUCCESS = "ADD_POSTS_SUCCESS"
export const ADD_POSTS_FAILED = "ADD_POSTS_FAILED"

export const DELETE_POSTS_PENDING = "DELETE_POSTS_PENDING"
export const DELETE_POSTS_SUCCESS = "DELETE_POSTS_SUCCESS"
export const DELETE_POSTS_FAILED = "DELETE_POSTS_FAILED"


export const fetchPosts = (payload) => {
  return async dispatch => {
  try {
    dispatch({type: FETCH_POSTS_PENDING})
    let posts = await axios.get(`http://localhost:8000/media/${payload.name}/${payload.id}/posts`)
    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: posts
    })

    } catch (err) {
      dispatch({
        type: FETCH_POSTS_FAILED,
        payload: err
      })
    }
  }
}


export const addPosts = (post, buttonsId) => {
  console.log('post:', post)
  console.log('buttonsId', buttonsId)
  post.buttons_id = buttonsId
  return async dispatch => {
    try{
      dispatch({type: ADD_POSTS_PENDING})
      let addedPost = await axios.post(`http://localhost:8000/media/addposts`, post)
      dispatch({
        type: ADD_POSTS_SUCCESS,
        payload: addedPost
      })
    } catch (err) {
      dispatch({
        type: ADD_POSTS_FAILED,
        payload: err
      })
    }
  }
}


export const deletePosts = (post) => {
  return async dispatch => {
    try{
      dispatch({type: DELETE_POSTS_PENDING})
      let deletedPost = await axios.delete(`http://localhost:8000/media/deleteposts`, post)
      dispatch({
        type: DELETE_POSTS_SUCCESS,
        payload: deletedPost
      })
    } catch (err) {
      dispatch({
        type: DELETE_POSTS_FAILED,
        payload: err
      })
    }
  }
}
