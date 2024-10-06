import { Row, Col } from "react-bootstrap";

const TwoUpReverse = ({ content }) => {
  const {title, text, img, link} = content;
  return (
    <Row className="two-up-reverse">
        <Col sm={12} md={6} lg={7}>
        <div className="title-text-box">
        <h3>{title}</h3>
            <p>
                {text}
            </p>
            { !!link && <a href={link} alt="Link to learn more" />}
        </div>
        </Col>
        <Col className="two-up-image" sm={12} md={6} lg={5}>
            <img src={img} alt="Industrial Bedroom Furniture" />
        </Col>
    </Row>
  )
}

export default TwoUpReverse;