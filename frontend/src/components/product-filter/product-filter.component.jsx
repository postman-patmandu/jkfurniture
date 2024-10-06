import { Card, CardBody } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductFilter = ({ product }) => {
    const productHref = `/product/${product._id}`;
  return (
    <Card className='my-3 rounded position-relative'>
        
        <Link to={productHref}>
            <Card.Img src={product.image} variant='top' />
        </Link>

        <CardBody>
            <div className='d-flex justify-content-between'>
                <Link className='product-title-link' to={productHref}>
                    <Card.Title as='div' className='product-card-title'>
                        {product.name}
                    </Card.Title>
                </Link>

                <Card.Text as='h5'>
                <strong>${product.price}</strong>
                </Card.Text>
            </div>
            <Card.Text>
                {product.category}
            </Card.Text>
        </CardBody>
    </Card>
  )
}

export default ProductFilter;