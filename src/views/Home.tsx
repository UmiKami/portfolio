import { Container, Row, Col } from "react-bootstrap"
import CallToActionText from '../components/CallToActionText';

const Home: React.FC = () => {
  const linkText: string = "check out my work";

  return <Container className="main-container">
    <Row>
      <Col >
        <h1 className="home__mainHeader">
          {"< Hello there! I am Ernesto />"}
        </h1>
        <p className="home__subHeader">
          {"std::cout << “A Full-Stack Software Developer” << endl;"}
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <CallToActionText beforeLinkText="" linkText={linkText} afterLinkText=""/>
      </Col>
    </Row>
  </Container>
}

export default Home