import { Row, Col } from 'react-bootstrap';
import Product from '../../components/product/product.component';
import Loader from '../../components/loader/loader.component';
import Message from '../../components/message/message.component';
import { useGetProductsQuery } from '../../slices/products-api-slice.component';
const HomeScreen = () => {
    const { data: products, isLoading, error } = useGetProductsQuery();
  return (
    <>
    { isLoading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>
            { error?.data?.message || error.error }
        </Message>
        ) : (
        <>
        <h1>Products</h1>
        <Row>
            {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
    </>
    ) }
        
    </>
  )
};

export default HomeScreen;