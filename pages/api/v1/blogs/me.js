import BlogApi from 'lib/api/blogs';
import auth0 from 'utils/auth0';

export default async function getUserBlogs(req, res) {
  try {
    const { accessToken } = await auth0.getSession(req);
    const json = await new BlogApi(accessToken).getByUser();
    res.json(json.data);
  } catch (err) {
    res.status(err.status || 400).json(err.response.data);
  }
}
