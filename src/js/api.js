import axios from 'axios';

export default class PixabayApiService {
  constructor() {
    this.API_KEY = '20180121-6058dbf0c2d40e7fb1402d980';
    this.BASE_URL = 'https://pixabay.com/api/';
  }

  async fetchImages(query, perPage) {
    try {
      const response = await axios.get(this.BASE_URL, {
        params: {
          key: this.API_KEY,
          q: query,
          per_page: perPage,
        },
      });

      const data = response.data;
      return data.hits;
    } catch (error) {
      console.error('Помилка під час запиту до Pixabay API:', error);
      throw error;
    }
  }
}

