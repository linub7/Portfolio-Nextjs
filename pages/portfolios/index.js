import Head from 'next/head';
import BaseLayout from '@/components/layout/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '../../lib/api/portfolios';
import { Col, Row, Button } from 'reactstrap';
import PortfolioCard from '../../components/PortfolioCard';
import { useRouter } from 'next/router';

const Portfolios = ({ portfolios }) => {
  const router = useRouter();
  const { data, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <Head>
        <title>Portfolios</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BasePage className="portfolio-page" header="Portfolios">
        <Row>
          {portfolios &&
            portfolios.map((portfolio) => (
              <Col
                onClick={() => router.push(`/portfolios/${portfolio._id}`)}
                md="4"
                key={portfolio._id}
              >
                <PortfolioCard portfolio={portfolio} />
              </Col>
            ))}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;

  return { props: { portfolios } };
}

export default Portfolios;
