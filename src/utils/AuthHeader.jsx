export const AuthHeader = () => {
  let token = JSON.parse(localStorage.getItem('token'));

  if (token) {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    };
  } else {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
  }
}
