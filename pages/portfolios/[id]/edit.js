import Head from 'next/head';
import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layout/BaseLayout';
import withAuth from '@/hoc/withAuth';
import { useRouter } from 'next/router';
import { useGetPortfolio } from '@/actions/portfolios';
import PortfolioForm from '@/components/PortfolioForm';
import { Col, Row } from 'reactstrap';
import { useUpdatePortfolio } from '@/actions/portfolios';
import { toast } from 'react-toastify';

const PortfolioEdit = ({ user }) => {
  const router = useRouter();
  const { data: initialData } = useGetPortfolio(router.query.id);
  const [updatePortfolio, { error }] = useUpdatePortfolio();

  const onSubmit = async (data) => {
    try {
      await updatePortfolio(router.query.id, data);
      toast.success('Portfolio Updated ✔️');
      setTimeout(() => {
        router.push('/portfolios');
      }, 1000);
    } catch (error) {
      toast.error('Something went wrong ❗');
    }
  };

  return (
    <BaseLayout user={user} loading={false}>
      <Head>
        <title>Portfolio Edit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BasePage header="Portfolio Edit">
        <Row>
          <Col md="8">
            {initialData && (
              <PortfolioForm onSubmit={onSubmit} initialData={initialData} />
            )}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(PortfolioEdit)('admin');
