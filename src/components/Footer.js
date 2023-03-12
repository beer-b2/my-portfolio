import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logowhite.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icons">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/abir-khamassi-a93577237/"
              >
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://github.com/beer-b2" target="_blank">
                <img src={navIcon2} className="github" alt="Github" />
              </a>
              <a
                href="https://instagram.com/abeer.kh_?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>CopyRight 2023. All Rights Reserved by abeer kh</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
