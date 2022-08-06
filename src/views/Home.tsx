import { Container, Row, Col, Image } from "react-bootstrap"
import CallToActionText from '../components/CallToActionText';
import useWindowDimensions from '../Hooks/WindowDimensions';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';

const Home: React.FC = () => {
  const linkText: string = "check out my work";
  const { width } = useWindowDimensions();

  useEffect(()=>{
    document.title = "Ernesto Gonzalez | Home"
  }, [])

  return <>
    <Navbar />
    <Container className="home__main-container">
      <Row>
        <Col>
          <p className="home__mainHeader">
            {"< Hello there! I am Ernesto />"}
          </p>
          <p className="home__subHeader">
            {"std::cout << “A Full-Stack Software Developer” << endl;"}
          </p>
        </Col>
      </Row>
      <Row style={{ width: "100vw" }}>
        <Col className="callToAction-containerH">
          {width > 991 ? <Image src={require("../assets/leftPerson.png")} fluid={true} className="img" /> : ""}
          <CallToActionText beforeLinkText="" linkText={linkText} afterLinkText="" link="/projects" />
          {width > 991 ? <Image src={require("../assets/rightPerson.png")} fluid={true} className="img" /> : ""}
        </Col>
      </Row>
    </Container>
  </>
}

export default Home