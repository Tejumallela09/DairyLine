import React from "react";
import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Form,
  Button,
  Alert,
  Card,
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import AddedToCartMessageComponent from "../components/AddedToCartMessageComponent";
import { useDispatch ,useSelector} from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const handleSubmit = () => {
  // Handle the click event for viewing the license
};

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart()); // Dispatch the addToCart action creator
  };
  const products = useSelector((state)=>state.cart.value);
  return (
    // <div style={{
    //   backgroundImage: 'url("https://media.istockphoto.com/id/932132694/photo/blue-sky-summer-background.jpg?s=612x612&w=0&k=20&c=xBPrf7AMGSgoEpEQ1Oo3dySbAQIqxpWr_uXtBOCz4mo=")',
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //   height: '250vh'
    // }}>
    <Container>
      <AddedToCartMessageComponent />
      <Row className="mt-5">
        <Col md={4}>
          <Image
            fluid
            src="/images/f1.jpg"
            alt="Farmer Image"
            style={{ width: "90%", height: "auto" }}
          />
          <h3>
            <center>Subba Rao</center>
          </h3>
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1>Subbaroa</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4} /> (1)
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    variant="primary"
                    size="sm"
                    className="mt-3"
                    onClick={handleSubmit}
                  >
                    View License
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}></Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <h5>Products</h5>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Card style={{ marginRight: "20px" }}>
                  <Card.Img
                    variant="top"
                    src="/images/product1.jpg"
                    alt="Product 1"
                  />
                  <Card.Body>
                    <Card.Title>Cow Milk</Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Quantity:
                        <Form.Select
                          size="sm"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </Form.Select>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Button onClick={addToCartHandler} variant="danger">
                          Add to cart
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
                <Card style={{ marginRight: "20px" }}>
                  <Card.Img
                    variant="top"
                    src="/images/product2.jpg"
                    alt="Product 2"
                  />
                  <Card.Body>
                    <Card.Title>Buffalo Milk</Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Quantity:
                        <Form.Select
                          size="sm"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </Form.Select>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Button onClick={addToCartHandler} variant="danger">
                          Add to cart
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
                <Card style={{ marginRight: "20px" }}>
                  <Card.Img
                    variant="top"
                    src="/images/product3.jpg"
                    alt="Product 3"
                  />
                  <Card.Body>
                    <Card.Title>Ghee</Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Quantity:
                        <Form.Select
                          size="sm"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </Form.Select>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Button onClick={addToCartHandler} variant="danger">
                          Add to cart
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
                <Card style={{ marginRight: "20px" }}>
                  <Card.Img
                    variant="top"
                    src="/images/product4.jpg"
                    alt="Product 4"
                  />
                  <Card.Body>
                    <Card.Title>Curd</Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Quantity:
                        <Form.Select
                          size="sm"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </Form.Select>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Button onClick={addToCartHandler} variant="danger">
                          Add to cart
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <h5>Customer Reviews</h5>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Ramesh <br />
                  <Rating readonly size={20} initialValue={4} /> <br />
                  20-09-2023 <br />
                  The quality of ghee is very good.
                </ListGroup.Item>
                <ListGroup.Item>
                  Geetha <br />
                  <Rating readonly size={20} initialValue={5} /> <br />
                  15-05-2023 <br />
                  The services,the quality of the milk is great.
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          <hr />
          <Alert variant="danger">Please log in to write a review.</Alert>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Write a review</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Your rating</option>
              <option value="5">5 (Very good)</option>
              <option value="4">4 (Good)</option>
              <option value="3">3 (Average)</option>
              <option value="2">2 (Bad)</option>
              <option value="1">1 (Awful)</option>
            </Form.Select>
            <Button className="mb-3 mt-3" variant="primary">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    // </div>
  );
};

export default ProductDetailsPage;
