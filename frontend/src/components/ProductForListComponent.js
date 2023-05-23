import {Row, Col,Card, Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from 'react-router-bootstrap';
const ProductForListComponent = ({images,idx}) => {
  return (
    <Card style={{ marginTop: "30px", marginBottom:"50px" }}>
      <Row>
        <Col lg={5}>
        {/* <Card.Img variant="top" src={"/images/"+ images[idx]+"/f3.jpg" }/> */}
        <Card.Img variant="top" src="/images/ab1.jpg"/>
        </Col>
        <Col lg={7}>
        <Card.Body>
        <Card.Title>Raju</Card.Title>
        <Card.Text>
          Name: Raju {<br/>}Age: 34
        </Card.Text>
        <Card.Text>
          <Rating readonly size={20} initialValue={5}/>(1)
        </Card.Text>
        <Card.Text className="h4">
          <LinkContainer to="/product-details"><Button variant="primary">Select</Button></LinkContainer>
        </Card.Text>
        
      </Card.Body>
        </Col>
      </Row>
      
      
    </Card>
  );
};

export default ProductForListComponent;
