import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const ProductCarousalComponent = () => {
  const cursorP = {
    cursor: "pointer"
  }
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"
          style={
            {
              height: "350px", objectFit: "auto"
            }
          }
          src="\images\carousal\carousal-1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP}
            to="/product-details">
            <h3>First slide label</h3>
          </LinkContainer>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={
            {
              height: "350px", objectFit: "auto"
            }
          }
          src="\images\carousal\carousal-2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP}
            to="/product-details">
            <h3>Second slide label</h3>
          </LinkContainer>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={
            {
              height: "350px", objectFit: "auto"
            }
          }
          src="\images\carousal\carousal-3.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP}
            to="/product-details">
            <h3>Third slide label</h3>
          </LinkContainer>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={
            {
              height: "350px", objectFit: "auto"
            }
          }
          src="\images\carousal\carousal-4.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP}
            to="/product-details">
            <h3>Third slide label</h3>
          </LinkContainer>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
};
export default ProductCarousalComponent;