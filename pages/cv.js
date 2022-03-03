import Head from 'next/head';
import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layout/BaseLayout';

import { useGetUser } from '@/actions/user';

const Cv = () => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <Head>
        <title>CV</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BasePage>
        <h1>cv</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default Cv;
