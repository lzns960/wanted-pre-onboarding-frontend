import API from './api';

const signup = async ({ email, password }) => {
  try {
    const response = await API.post('/auth/signup', {
      email,
      password,
    });
    return response;
  } catch (error) {
    if (error.response.data.message) {
      alert(error.response.data.message);
    }
  }
};

const signin = async ({ email, password }) => {
  try {
    const response = await API.post('/auth/signin', {
      email,
      password,
    });
    const token = response.data.access_token;
    token && localStorage.setItem('user', token);
    return response;
  } catch (error) {
    console.log(error);
    alert(error.response.statusText);
  }
};

export { signin, signup };
