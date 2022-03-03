import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import BaseLayout from '@/components/layout/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';

const Portfolios = ({ posts }) => {
  const { data, loading } = useGetUser();
  const renderPosts = (posts) => {
    return posts?.map((post) => (
      <li key={post.id} className="text-xl">
        <Link href={`/portfolios/${post.id}`} passHref>
          <a>{post.title}</a>
        </Link>
      </li>
    ));
  };
  return (
    <BaseLayout user={data} loading={loading}>
      <Head>
        <title>Portfolios</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BasePage>
        <ul>{renderPosts(posts)}</ul>
      </BasePage>
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
