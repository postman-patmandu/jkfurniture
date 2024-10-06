import { Row, Col } from "react-bootstrap";
import industrialImage from "../../assets/industrial-bedroom-image.jpg";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const TwoUp = ({ content }) => {
  const {title, text, link} = content;
  return (
    <Row className="two-up">
        <Col sm={12} md={6} lg={7}>
        <div className="title-text-box">
        <h3>{title}</h3>
            <p>
                {text}
            </p>
            { !!link && <a href={link} alt="Link to learn more" >Learn More <NavigateNextIcon /></a>}
        </div>
        </Col>
        <Col className="two-up-image" sm={12} md={6} lg={5}>
            <img src={industrialImage} alt="Industrial Bedroom Furniture" />
        </Col>
    </Row>
  )
}

export default TwoUp;