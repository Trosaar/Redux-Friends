import axios from 'axios';

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export function login(username, password) {
  return (dispatch) => {
    dispatch({type:LOGIN_PENDING})
    return axios.post('http://localhost:5000/api/friends', {username, password})
      .then(res => {
        dispatch({type:LOGIN_SUCCESS})
        console.log(res);
        localStorage.setItem('token', res.data.token)
      })
      .catch(err => {
        console.log(err);
      })
  }
}
