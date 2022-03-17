import axios from 'axios';

class BlogApi {
  constructor(accessToken) {
    this.config = {};
    if (accessToken) {
      this.config.headers = {
        authorization: `Bearer ${accessToken}`,
      };
    }
    this.apiUrl = `${process.env.API_URL}/blogs`;
  }
  getByUser() {
    return axios.get(`${this.apiUrl}/me`, this.config);
  }

  getById(id) {
    return axios.get(`${this.apiUrl}/${id}`);
  }

  createBlog(data) {
    return axios.post(this.apiUrl, data, this.config);
  }

  updateBlog(id, data) {
    return axios.patch(`${this.apiUrl}/${id}`, data, this.config);
  }

  deleteBlog(id) {
    return axios.delete(`${this.apiUrl}/${id}`, this.config);
  }
}

export default BlogApi;
