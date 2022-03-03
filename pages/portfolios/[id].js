import axios from 'axios';
import Head from 'next/head';
import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layout/BaseLayout';
import { useGetUser } from '@/actions/user';

const Portfolio = () => {
  const { data, loading } = useGetUser();

  return (
    <BaseLayout user={data} loading={loading}>
      <Head>
        <title>Portfolio Detail</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BasePage>
        <h1>I am Portfolio Page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolio;
