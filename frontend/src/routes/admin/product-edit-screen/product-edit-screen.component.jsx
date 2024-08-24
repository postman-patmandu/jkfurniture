import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Message from "../../../components/message/message.component";
import Loader from "../../../components/loader/loader.component";
import FormContainer from "../../../components/form/form-container.component";
import { toast } from "react-toastify";
import {
  useUpdateProductMutation,
  useGetProductDetailsQuery,
  useUploadProductImageMutation,
} from "../../../slices/products-api-slice.component";

const ProductEditScreen = () => {
  const { id: productId } = useParams();
  console.log(productId);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [material, setMaterial] = useState("");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [homeSpace, setHomeSpace] = useState("");
  const [code, setCode] = useState("");
  const [style, setStyle] = useState("");

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  const [updateProduct, { isLoading: loadingUpdate }] =
    useUpdateProductMutation();

  const [uploadProductImage, { isLoading: loadingUpload }] =
    useUploadProductImageMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setName(product.name || "");
      setPrice(product.price.toFixed(2) || 0);
      setDescription(product.description || "");
      setImage(product.image || "");
      setBrand(product.brand || "");
      setCategory(product.category || "");
      setCountInStock(product.countInStock || 0);
      setMaterial(product.material || "");
      setWidth(product.Width || 0);
      setHeight(product.height || 0);
      setLength(product.length || 0);
      setHomeSpace(product.homeSpace || "");
      setCode(product.code || "");
      setStyle(product.style || "");
    }
  }, [product]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const updatedProduct = {
      _id: productId,
      name,
      price,
      description,
      image,
      brand,
      category,
      countInStock,
      material,
      width,
      height,
      length,
      homeSpace,
      code,
      style,
    };

    const result = await updateProduct(updatedProduct);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Product updated");
      refetch();
      navigate("/admin/productlist");
    }
  };

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    try {
        const res = await uploadProductImage(formData).unwrap();
        toast.success(res.message);
        setImage(res.image);
    } catch (err) {
        toast.error(err?.data?.message || err.error);
    }
  }

  return (
    <>
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error.data.message}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="price" className="my-2">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="description" className="my-2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image" className="my-2">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage}
              ></Form.Control>
              <Form.Control
                type="file"
                label="Choose file"
                onChange={uploadFileHandler}
              ></Form.Control>
            </Form.Group>
            {loadingUpload && <Loader />}

            <Form.Group controlId="brand" className="my-2">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="category" className="my-2">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="countInStock" className="my-2">
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Count In Stock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="material" className="my-2">
              <Form.Label>Material</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter material"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="width" className="my-2">
              <Form.Label>Width</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter width"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="height" className="my-2">
              <Form.Label>Height</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="length" className="my-2">
              <Form.Label>Length</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="code" className="my-2">
              <Form.Label>Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="style" className="my-2">
              <Form.Label>Style</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter material"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary" className="my-2">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;
