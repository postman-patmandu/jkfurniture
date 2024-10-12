import { Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Product from "../../components/product/product.component";
import Loader from "../../components/loader/loader.component";
import Message from "../../components/message/message.component";
import Paginate from "../../components/paginate/paginate.component";
import ProductCarousel from "../../components/product-carousel/product-carousel.component";
import ProductCategories from "../../components/product-categories/product-categories.component";
import Headings from "../../components/headings/headings.component";
import TwoUp from "../../components/two-up/two-up.component";
import TwoUpReverse from "../../components/two-up-reverse/two-up-reverse.component";
import Showcase from "../../components/showcase/showcase.component";
import ScrollTop from "../../utils/scroll-top.utils";
import industrialImage from "../../assets/industrial-bedroom-image.jpg";
import marketRoadImage from "../../assets/market-road-dining.jpg";
import Meta from "../../components/meta/meta.component";
import { useGetProductsQuery } from "../../slices/products-api-slice.component";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({ keyword, pageNumber });
  const headline = 'Latest\nProducts';
  const headlineTag = 'Selection';
  const title = "Style";
  const content = {
    title: "Style Tips for Rustic Funiture",
    text: `Stylish wooden rustic furniture combines natural textures and earthy tones, featuring 
        reclaimed wood, distressed finishes, and handcrafted details. It exudes warmth and 
        timeless charm, blending seamlessly with modern or traditional decor for a cozy, 
        inviting atmosphere.`,
    link: "/styling-tips",
    img: industrialImage
  }
  const content1 = {
    title: "What is Rustic Furniture",
    text: `Rustic furniture is characterized by its natural, raw beauty and rugged charm. Typically crafted from materials like reclaimed wood, stone, or metal, it emphasizes simplicity and craftsmanship. Rustic pieces often feature distressed finishes, visible grain patterns, and imperfections that highlight the material's organic nature. This style celebrates earthy tones, handmade details, and a connection to nature, creating a warm, cozy, and timeless atmosphere. Ideal for creating inviting spaces, rustic furniture blends seamlessly with both traditional and contemporary interiors.`,
    link: "",
    img: marketRoadImage
  }
  const showcase = "Styling a mix of modern and rustic furniture creates a balanced, dynamic space. To achieve this look, start by pairing sleek, minimalist modern pieces with the warm textures of rustic wood furniture.";
  const metaDetails = {
    title: "Welcome to Furniture Shop NZ",
    description: "Rustic furniture is characterized by its natural, raw beauty and rugged charm. Typically crafted from materials like reclaimed wood, stone, or metal, it emphasizes simplicity and craftsmanship. Rustic pieces often feature distressed finishes, visible grain patterns, and imperfections that highlight the material's organic nature.",
    keywords: "what is rustic furniture, where to buy rustic furniture near me, furniture store, furniture stores, furniture stores, the furniture shop, reclaimed wood, distressed finishes, and handcrafted details. It exudes warmth and timeless charm, blending seamlessly with modern or traditional decor"

  }
  return (
    <>
      {!keyword ? ( 
        <ProductCarousel />
      ) : (
        <Link to='/' className="btn btn-light mb-4 mt-2">Go Back</Link> )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta tite={metaDetails.title} description={metaDetails.description} keywords={metaDetails.keywords} />
          <ProductCategories />
          <Headings headline={headline} headlineTag={headlineTag} />
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
            <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
            />

            <TwoUp content={content} />
            <Showcase body={showcase} />
            <TwoUpReverse content={content1} />
            
            <ScrollTop />
           
        </>
      )}
    </>
  );
};

export default HomeScreen;
