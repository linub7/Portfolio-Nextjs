import Head from 'next/head';
import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layout/BaseLayout';
import withAuth from '@/hoc/withAuth';
import { Col, Row } from 'reactstrap';
import PortfolioForm from '@/components/PortfolioForm';
import { createPortfolio, useCreatePortfolio } from '@/actions/portfolios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Redirect from '@/components/shared/Redirect';

const New = ({ user, loading: userLoading }) => {
  const [createPortfolio, { data, loading, error }] = useCreatePortfolio();

  if (data) {
    return <Redirect to="/portfolios" />;
  }

  if (error) {
    toast.error(error);
  }
  return (
    <BaseLayout user={user} loading={userLoading}>
      <Head>
        <title>New Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BasePage header="Create Portfolio">
        <Row>
          <Col md="8">
            <PortfolioForm onSubmit={createPortfolio} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(New)('admin');
