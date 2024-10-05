import { Card, CardBody } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../rating/rating.component';
import StockBadge from '../stock-badge/stock-badge.component';
import Stock from '../stock/stock.component';

const Product = ({ product }) => {
    const productHref = `/product/${product._id}`;
  return (
    <Card className='my-3 rounded position-relative align-items-stretch'>
        
        <Link to={productHref}>
            <Card.Img src={product.image} variant='top' />
        </Link>

        <CardBody>
            <Link className='product-title-link' to={productHref}>
                <Card.Title as='div' className='product-title'>
                    {product.name}
                </Card.Title>
            </Link>
            <Stock product={ product } />
            <Card.Text as='div'>
                <Rating value={ product.rating } text={ `${product.numReviews} reviews` } />
            </Card.Text>

            <Card.Text as='h5'>
                ${product.price}
            </Card.Text> 
        </CardBody>
    </Card>
  )
}

export default Product;