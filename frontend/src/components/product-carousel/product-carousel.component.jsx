import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Loader from "../loader/loader.component";
import Message from "../message/message.component";
import { useGetTopProductsQuery } from "../../slices/products-api-slice.component";
import heroData from '../../data/hero-images.json';

const ProductCarousel = () => {
  const hero = heroData.heroImages;

  // const { data: products, isLoading, error } = useGetTopProductsQuery();
  // return isLoading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
  // : (
  //   <Carousel pause='hover' className="bg-primary mb-4">
  //      {products.map((product) => (
  //       <Carousel.Item key={product._id}>
  //           <Link to={`/product/${product._id}`}>
  //               <Image src={product.image} alt={product.name} fluid />
  //               <Carousel.Caption className="carousel-caption">
  //                   <h2>{product.name} (${product.price})</h2>
  //               </Carousel.Caption>
  //           </Link>
  //       </Carousel.Item>
  //      ))} 
  //   </Carousel>
  // )
  return (
    <Carousel pause='hover' className="bg-primary mb-4">
    {hero.map((hero) => (
    <Carousel.Item key='01'>
        {/* <Link to={`/product/${product._id}`}> */}
            <Image src={hero.image} alt={hero.name} fluid />
            <Carousel.Caption className="carousel-caption">
                {/* <h2>{product.name} (${product.price})</h2> */}
            </Carousel.Caption>
        {/* </Link> */}
    </Carousel.Item>
   ))}
</Carousel>
  )
}

export default ProductCarousel;