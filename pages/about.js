import Head from 'next/head';
import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layout/BaseLayout';

const About = () => {
  return (
    <BaseLayout>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BasePage>
        <h1>about</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default About;
