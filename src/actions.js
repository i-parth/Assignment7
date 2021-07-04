import axios from 'axios'

export const getAllCharcters = () => {
  return (dispatch) => {
    axios.get('https://finalspaceapi.com/api/v0/character/')
      .then((response) => {
        let item = response.data
        dispatch({
          type: 'ADD_ALL_ITEMS',
          payload: item
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
}