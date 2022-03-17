import Head from 'next/head';
import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layout/BaseLayout';
import { useGetUser } from '@/actions/user';
import Link from 'next/link';
import { Col, Row } from 'reactstrap';
import MastHead from 'components/shared/MastHead';

const Blogs = () => {
  const { data: user, loading } = useGetUser();
  return (
    <BaseLayout
      navClass="transparent"
      className="blog-listing-page"
      user={user}
      loading={loading}
    >
      <MastHead imagePath="/images/home-bg.jpg">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1>Fresh Blogs</h1>
              <span className="subheading">Programming, travelling...</span>
            </div>
          </div>
        </div>
      </MastHead>
      <BasePage className="blog-body">
        <Row>
          <Col md="10" lg="8" className="mx-auto">
            <div>
              <div className="post-preview clickable">
                <Link href="#">
                  <a>
                    <h2 className="post-title">Some Title</h2>
                    <h3 className="post-subtitle">Some Subtitle</h3>
                  </a>
                </Link>
                <p className="post-meta">
                  Posted by
                  <a href="#"> Filip Jerga </a>- 11/11/2011
                </p>
              </div>
              <hr></hr>
            </div>
          </Col>
          <Col md="10" lg="8" className="mx-auto">
            <div>
              <div className="post-preview clickable">
                <Link href="#">
                  <a>
                    <h2 className="post-title">Some Title</h2>
                    <h3 className="post-subtitle">Some Subtitle</h3>
                  </a>
                </Link>
                <p className="post-meta">
                  Posted by
                  <a href="#"> Filip Jerga </a>- 11/11/2011
                </p>
              </div>
              <hr></hr>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default Blogs;
