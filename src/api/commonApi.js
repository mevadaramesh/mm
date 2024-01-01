import axios from 'axios';
const getApi = async (url) => {
  return await axios.get(url);
}

export {
  getApi
}