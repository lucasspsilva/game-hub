import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'eb3853ebe1874364a9c7847a0114cd24',
  },
});
