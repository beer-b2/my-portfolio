import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import arrow from "../assets/img/arrow1.svg";
import headerImg from "../assets/img/header-img.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const Banner = () => {
  // code for animation of texted typed
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  //   list of name to rotae/displayed
  const toRotate = [
    "Web Developer",
    "Software programmer",
    "Hardware Engineer",
  ];
  const [text, setText] = useState("");
  //   to determin the speed of the letters showing on the screen
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  //   time between transition of each word
  const period = 2000;

  // run the function for typing or deleting the text animation
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    // index of the current
    let i = loopNum % toRotate.length;
    // the current text
    let fullText = toRotate[i];
    // if case for if its deleting
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    //   updating the state to the current text
    setText(updatedText);

    //  to detelmet if its deleting and make the speed faster
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.5);
    }

    // if thext is done typying start deleting
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    }
    // if its deleting and completilg empty we stop and move to typing to the next text
    else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };

  return (
    <Router>
      {" "}
      <section className="banner" id="home">
        {/* the container and classnames are from bootstrap */}
        <Container>
          <Row className="align-items-center">
            {/* the xs md and xl is for the screensizes */}
            <Col xs={12} md={6} xl={7}>
              <span className="tagline"> Welcome to my Portfolio</span>
              <h1>
                {"Hi I'm Abir a "}
                <span className="wrap">{text}</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                quis eros eu ipsum bibendum malesuada. Aenean at justo at enim
                tristique interdum. Integer scelerisque posuere ex in consequat.
                Quisque nec commodo sapien. Vestibulum commodo, urna ac lobortis
                iaculis, risus augue mattis velit, in mollis arcu magna id
                neque. Sed suscipit, sapien ut dapibus euismod, augue nulla
                rhoncus nunc, non convallis sapien sapien a purus. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Nulla facilisi. Etiam consequat consectetur
                augue.
              </p>
              <HashLink to="#contact">
                <button>
                  Let's Connect <ArrowRightCircle size={25} />
                </button>
              </HashLink>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header Img" />
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
