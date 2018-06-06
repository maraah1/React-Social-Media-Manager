import axios from 'axios';


export const FETCH_PICTURES_PENDING = "FETCH_PICTURES_PENDING"
export const FETCH_PICTURES_SUCCESS = "FETCH_PICTURES_SUCCESS"
export const FETCH_PICTURES_FAILED = "FETCH_PICTURES_FAILED"

export const fetchPictures = (payload) => {
  return async dispatch => {
    try{

      dispatch({type: FETCH_PICTURES_PENDING})
      let pictures = await axios.get(`http://localhost:8000/media/${payload.name}`)
      console.log('pictures:', pictures)
      dispatch({
        type: FETCH_PICTURES_SUCCESS,
        payload: pictures
      })
    } catch (err) {
      dispatch({
        type: FETCH_PICTURES_FAILED,
        payload: err
      })
    }
  }
}
