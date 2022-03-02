import axios from 'axios';
import Head from 'next/head';
import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layout/BaseLayout';

const Portfolio = ({ post }) => {
  const { title, body, id } = post;
  return (
    <BaseLayout>
      <Head>
        <title>Portfolio Detail</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BasePage>
        <h1>I am Portfolio Page</h1>
        <h1>{title}</h1>
        <p>{body}</p>
        <p>ID:{id}</p>
      </BasePage>
    </BaseLayout>
  );
};

Portfolio.getInitialProps = async ({ query }) => {
  let post = null;
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${query.id}`
    );
    post = res.data;
  } catch (error) {
    console.log(error);
  }
  return { post };
};

export default Portfolio;
