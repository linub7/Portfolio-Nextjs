import Link from 'next/link';
import { Container, Row, Button } from 'reactstrap';

const MastHead = ({ imagePath, children }) => {
  return (
    <div className="masthead" style={{ backgroundImage: `url(${imagePath})` }}>
      {/* <div className="overlay"></div> */}
      <Container>
        <Row>{children}</Row>
      </Container>
    </div>
  );
};

export default MastHead;
