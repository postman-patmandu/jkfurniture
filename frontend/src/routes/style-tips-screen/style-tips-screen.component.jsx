import { Row, Col } from "react-bootstrap";
import parisLvingRoom from "../../assets/paris-living-room.jpg";
import Meta from "../../components/meta/meta.component";

const StyleTips = () => {
  const title = "Mixing Modern & Rustic Furniture"
  const description = "Here are some handy styling tips for mixing modern and rustic furniture across the bedroom, dining, and living rooms:";
  return (
    <section className="style-tips-container">
      <Meta title={title} description={description} />
      <Row className="justify-content-center">
        <Col sm={12} md={9}>
          <h1>Mixing Modern & Rustic Furniture</h1>
          <div className="style-tagline-box" sm={12} md={9} >
            <p>
              Here are some handy styling tips for mixing modern and rustic furniture
              across the bedroom, dining, and living rooms:
            </p>
          </div>
          <h4>Bedroom</h4>
          <ul>
            <li>
              <strong>Mix Textures:</strong> Combine rustic wooden bed frames
              with modern, sleek nightstands. Use linen or cotton bedding to
              soften the look while enhancing both styles.
            </li>
            <li>
              <strong>Neutral Palette:</strong> Stick to neutral tones like
              whites, grays, and earth tones. Rustic wood adds warmth, while
              modern pieces bring clean lines.
            </li>
            <li>
              <div className="style-box">
                <p>
                  Use a neutral color palette to unify both styles, allowing
                  natural wood tones to stand out. Incorporate soft
                  textiles—like throws or rugs—to add warmth. Finally, focus on
                  simplicity in accessories to maintain harmony without
                  overwhelming the space.
                </p>
              </div>
            </li>
            <li>
              <strong>Statement Lighting:</strong> Choose modern pendant lights
              or minimalist lamps to contrast with rustic furniture like wooden
              dressers or bedside tables.
            </li>
            <li>
              <strong>Layer Accessories:</strong> Add cozy throws and pillows in
              modern patterns on rustic beds, and opt for abstract art or
              mirrors with metallic frames.
            </li>
          </ul>
          <h4>Living Room</h4>
          <ul>
            <li>
              <strong>Contrasting Furniture:</strong> Pair a rustic coffee table
              with a modern, sleek sofa. Choose industrial-style modern metal or
              glass shelves to contrast with distressed wood furniture.
            </li>
            <li>
              <strong>Mix Modern Art and Rustic Finishes:</strong> Frame modern
              artwork in a room featuring rustic wood walls or use modern
              sculptures alongside reclaimed wood accents.
            </li>
            <li>
            <img
                src={parisLvingRoom}
                alt="Paris Living Room, TV stand, Display Unit, Hall Table"
              />
            </li>
            <li>
              <strong>Balance Soft and Hard:</strong> Incorporate plush, modern
              couches and rugs with rustic, textured wood pieces. This contrast
              creates warmth and a sense of balance in the living space.
            </li>
            <li>
              <strong>Open Shelving:</strong> Use modern, open shelving units to
              display rustic decor, such as handmade pottery or natural stone
              accents, creating harmony between both styles.
            </li>
          </ul>
          <h4>Dining Room</h4>
          <ul>
            <li>
              <strong>Blend Tables and Chairs:</strong> Pair a large rustic
              wooden dining table with modern chairs. Metal or acrylic seating
              brings an industrial or contemporary touch to balance the wood.
            </li>
            <li>
              <strong>Mix Materials:</strong> Combine different materials such
              as glass, metal, and wood. A modern glass centerpiece on a rustic
              table enhances the visual balance.
            </li>
            <li>
              <strong>Modern Lighting:</strong> Install a minimalist chandelier
              or pendant lights over the dining table to add a modern focal
              point above the rustic furniture.
            </li>
            <li>
              <strong>Wall Decor:</strong> Hang modern art on walls featuring
              rustic wooden paneling or use sleek, frameless mirrors to keep the
              space open.
            </li>
          </ul>
          <div className="style-box">
            <p>
              By thoughtfully combining materials, textures, and design
              elements, you can create a cohesive, stylish look that bridges
              modern and rustic aesthetics in any room.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default StyleTips;
