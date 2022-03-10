import axios from 'axios';

class PortfolioApi {
  constructor(accessToken) {
    this.config = {};
    if (accessToken) {
      this.config.headers = {
        authorization: `Bearer ${accessToken}`,
      };
    }
    this.apiUrl = `${process.env.API_URL}/portfolios`;
  }
  getAll() {
    return axios.get(this.apiUrl);
  }

  getById(id) {
    return axios.get(`${this.apiUrl}/${id}`);
  }

  updatePortfolio(id, data) {
    return axios.patch(`${this.apiUrl}/${id}`, data, this.config);
  }

  deletePortfolio(id) {
    return axios.delete(`${this.apiUrl}/${id}`, this.config);
  }

  createPortfolio(data) {
    return axios.post(this.apiUrl, data, this.config);
  }
}

export default PortfolioApi;
