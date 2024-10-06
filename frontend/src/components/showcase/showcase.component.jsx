import { Row, Col } from "react-bootstrap";

const Showcase = ({ body }) => {
  return (
    <section className="showcase-container">
        <Row className="justify-content-center">
            <Col sm={12} md={6} lg={10} >
                <p>
                    {body}
                </p>
            </Col>
        </Row>
    </section>
  )
}

export default Showcase;