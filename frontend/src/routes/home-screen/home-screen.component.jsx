import { Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Product from "../../components/product/product.component";
import Loader from "../../components/loader/loader.component";
import Message from "../../components/message/message.component";
import Paginate from "../../components/paginate/paginate.component";
import ProductCarousel from "../../components/product-carousel/product-carousel.component";
import ProductCategories from "../../components/product-categories/product-categories.component";
import Headings from "../../components/headings/headings.component";
import ScrollTop from "../../utils/scroll-top.utils";
import Meta from "../../components/meta/meta.component";
import { useGetProductsQuery } from "../../slices/products-api-slice.component";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({ keyword, pageNumber });
  const headline = 'Latest\nProducts';
  const headlineTag = 'Selection';
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
          <Meta />
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
            
            <ScrollTop />
           
        </>
      )}
    </>
  );
};

export default HomeScreen;
