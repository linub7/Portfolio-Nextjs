import BlogApi from '@/lib/api/blogs';
import auth0 from '@/utils/auth0';

export default async function handleBlog(req, res) {
  const {
    query: { id },
    body,
  } = req;
  const { accessToken } = await auth0.getSession(req);

  if (req.method === 'GET') {
    const json = await new BlogApi().getById(id);
    const { blog } = json.data;
    return res.json(blog);
  }

  if (req.method === 'PATCH') {
    try {
      const json = await new BlogApi(accessToken).updateBlog(id, body);
      const updatedBlog = json.data;
      res.json(updatedBlog);
    } catch (err) {
      console.log(err);
      res.status(err.status || 422).json(err);
    }
  }

  if (req.method === 'DELETE') {
    try {
      const json = await new BlogApi(accessToken).deleteBlog(id);
      const deletedBlog = json.data;
      res.json(deletedBlog);
    } catch (err) {
      console.log(err);
      res.status(err.status || 422).json(err.response.data);
    }
  }
}
