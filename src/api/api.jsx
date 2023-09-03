import axios from 'axios';
const API_KEY = '38163624-c401c415b68f921ba84e58d0e';
const URL_BASE = 'https://pixabay.com/api/';

const api = axios.create({
  baseURL: URL_BASE,
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

const imagesApi = {
  search: (query, page = 1) =>
    api.get('', {
      params: {
        q: query,
        page: page,
      },
    }),
};

export { imagesApi };
