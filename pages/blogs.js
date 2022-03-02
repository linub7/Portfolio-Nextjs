import Head from 'next/head';
import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layout/BaseLayout';

const Blogs = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Blogs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BasePage>
        <h1>blogs</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default Blogs;
