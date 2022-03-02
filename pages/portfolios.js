import BaseLayout from '../components/layout/BaseLayout';
import axios from 'axios';
// import Link from 'next/link';
import { Link } from '../routes';

const Portfolios = ({ posts }) => {
  const renderPosts = (posts) => {
    return posts?.map((post) => (
      <li key={post.id} className="text-xl">
        <Link route={`/portfolios/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ));
  };
  return (
    <BaseLayout>
      <ul>{renderPosts(posts)}</ul>
    </BaseLayout>
  );
};

Portfolios.getInitialProps = async () => {
  let posts = [];
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    posts = res.data;
  } catch (error) {
    console.log(error);
  }
  return { posts: posts.slice(0, 10) };
};

export default Portfolios;
