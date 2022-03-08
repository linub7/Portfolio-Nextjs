import axios from 'axios';
import Head from 'next/head';
import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layout/BaseLayout';
import { useGetUser } from '@/actions/user';
import { useRouter } from 'next/router';
import PortfolioApi from '../../lib/api/portfolios';

const Portfolio = ({ portfolio }) => {
  const { data, loading } = useGetUser();
  const router = useRouter();
  console.log(router);

  return (
    <BaseLayout user={data} loading={loading}>
      <Head>
        <title>Portfolio Detail</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BasePage header="Portfolio Detail">
        <h1>I am Portfolio Detail Page</h1>
        {JSON.stringify(portfolio)}
      </BasePage>
    </BaseLayout>
  );
};

export async function getStaticPaths() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;

  // Get the paths we want to pre-render based on portfolio id
  const paths = portfolios.map((portfolio) => {
    return { params: { id: portfolio._id } };
  });

  // fallback false means that "not Found pages will be resolve into 404 page"
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return { props: { portfolio } };
}

// export async function getServerSideProps({ query }) {
//   const json = await new PortfolioApi().getById(query.id);
//   const portfolio = json.data;

//   return { props: { portfolio } };
// }

export default Portfolio;
