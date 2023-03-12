import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, link, imgUrl, projLink }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img href={projLink} src={imgUrl} alt={"Project " + title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a target="_blanck" href={projLink}>
            {link}
          </a>
        </div>
      </div>
    </Col>
  );
};
