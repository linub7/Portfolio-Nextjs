import Head from 'next/head';
import { useState } from 'react';
import BaseLayout from '@/components/layout/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';
import { Col, Row, Button } from 'reactstrap';
import PortfolioCard from '@/components/PortfolioCard';
import { useRouter } from 'next/router';
import { isAuthorized } from '@/utils/auth0';
import { useDeletePortfolio } from '@/actions/portfolios';

const Portfolios = ({ portfolios: initialPortfolios }) => {
  const [portfolios, setPortfolios] = useState(initialPortfolios);
  const router = useRouter();
  const { data, loading } = useGetUser();
  const [deletePortfolio, { data: deleteData, error }] = useDeletePortfolio();

  const handleEditPageRoute = (e, id) => {
    // we have another router.push in Col, in order to avoid its effect on the edit router we have to implement e.stopPropagation()
    e.stopPropagation();
    router.push(`/portfolios/${id}/edit`);
  };

  const handleDeletePortfolio = (e, id) => {
    e.stopPropagation();
    if (window.confirm('Are you sure?!')) {
      deletePortfolio(id);
      const newPortfolios = portfolios.filter(
        (portfolio) => portfolio._id !== id
      );
      setPortfolios(newPortfolios);
    }
  };
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
                <PortfolioCard portfolio={portfolio}>
                  {data && isAuthorized(data, 'admin') && (
                    <>
                      <Button
                        className="m-2"
                        color="warning"
                        onClick={(e) => handleEditPageRoute(e, portfolio._id)}
                      >
                        Edit
                      </Button>
                      <Button
                        color="danger"
                        onClick={(e) => handleDeletePortfolio(e, portfolio._id)}
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </PortfolioCard>
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
