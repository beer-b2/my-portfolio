import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/qr-code.jpg";
import projImg2 from "../assets/img/nft-card.jpg";
import projImg3 from "../assets/img/interactive-rating.jpg";
import projImg4 from "../assets/img/rahnama-shipbuilding-website.png";

export const Projects = () => {
  // array that holds project info
  const projects = [
    {
      title: "QR Code Component",
      description: "A challange by frontend mentor",
      link: "View",
      imgUrl: projImg1,
      projLink: "https://beer-b2.github.io/QR-card",
    },
    {
      title: "NFT Preview Card Component",
      description: "A challange by frontend mentor",
      link: "View",
      imgUrl: projImg2,
      projLink: "https://beer-b2.github.io/beer-b2-NFT-Preview/",
    },
    {
      title: "Interactive Rating Component Using Js",
      description: "A challange by frontend mentor",
      link: "View",
      imgUrl: projImg3,
      projLink: "https://beer-b2.github.io/Interactive-rating-component/",
    },
    {
      title: "Shipbuilding Website",
      description: "Client Website",
      link: "View",
      imgUrl: projImg4,
      projLink: "https://rahnamaholding.com/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2> Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content id="slidInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second" className="workInProgrss">
                  {" "}
                  Work in progress
                </Tab.Pane>
                <Tab.Pane eventKey="third" className="workInProgrss">
                  {" "}
                  Work in progress
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="colorSharp2"
      />
    </section>
  );
};
