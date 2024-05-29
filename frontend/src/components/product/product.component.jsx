import { Card, CardBody } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../rating/rating.component';

const Product = ({ product }) => {
    const productHref = `/product/${product._id}`;
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={productHref}>
        <Card.Img src={product.image} variant='top' />
        </Link>

        <CardBody>
            <Link to={productHref}>
                <Card.Title as='div' className='product-title'>
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>

            <Card.Text as='div'>
                <Rating value={ product.rating } text={ `${product.numReviews} reviews` } />
            </Card.Text>

            <Card.Text as='h3'>
                ${product.price}
            </Card.Text> 
        </CardBody>
    </Card>
  )
}

export default Product;