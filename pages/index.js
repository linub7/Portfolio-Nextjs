/* eslint-disable @next/next/no-img-element */
import BaseLayout from '@/components/layout/BaseLayout';
import { Col, Container, Row } from 'reactstrap';
import Typed from 'react-typed';
import Head from 'next/head';
import { useGetUser } from '@/actions/user';

const ROLES = ['Developer', 'Tech Lover', 'Team Player', 'React.js', 'Node.js'];
const Index = () => {
  const { data, loading } = useGetUser();

  return (
    <BaseLayout
      user={data}
      loading={loading}
      className="cover"
      navClass="transparent"
    >
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="main-section">
        <div className="background-image">
          <img src="/images/background-index.png" alt="bgImg" />
        </div>

        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className={`flipper`}>
                  <div className="back">
                    <div className="hero-section-content">
                      <h2> Full Stack Web Developer </h2>
                      <div className="hero-section-content-intro">
                        Have a look at my portfolio and job history.
                      </div>
                    </div>
                    <img
                      className="image"
                      src="/images/section-1.jpg"
                      alt="sectionOneImg"
                    />
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <h1>
                  Welcome to the portfolio website of Mohammad Hadi. Get
                  informed, collaborate and discover projects I was working on
                  through the years!
                </h1>
              </div>
              <Typed
                loop
                strings={ROLES}
                typeSpeed={70}
                backSpeed={70}
                backDelay={1000}
                loopCount={0}
                showCursor
                className="self-typed"
                cursorChar="|"
              />
              <div className="hero-welcome-bio">
                <h1>{`Let's take a look on my work.`}</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  );
};

export default Index;
