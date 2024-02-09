import sendRequest from './send-request';


export function signUp(userData) {
  return sendRequest(`${process.env.REACT_APP_USERS_URL}`, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${process.env.REACT_APP_USERS_URL}/login`, 'POST', credentials);
}

export function checkToken(){
  return sendRequest(`${process.env.REACT_APP_USERS_URL}/check-token`);
}

