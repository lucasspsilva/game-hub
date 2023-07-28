import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'c1b2a60a0ada49cb861801cc10c13697',
  },
});
