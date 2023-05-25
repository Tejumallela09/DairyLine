import { Container, Row, Col, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import SortOptionsComponent from "../components/filterQueryResultOptions/SortOptionsComponent.js";
import RatingfilterComponent from "../components/filterQueryResultOptions/RatingFilterComponent.js";
import CategoryFilterComponent from "../components/filterQueryResultOptions/CategoryFilterComponent.js";
import ProductForListComponent from "../components/ProductForListComponent.js";
import PaginationComponent from "../components/PaginationComponent.js"
import axios from "axios";
const ProductListPage = () => {
  //arrow function
  // return <p>This is Product List Page </p>
  axios.get("/api/farmers").then((res) => console.log(res));
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item className="mb-3 mt-3">
              <SortOptionsComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingfilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <CategoryFilterComponent />
            </ListGroup.Item>
            {/* <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
            {/* <ListGroup.Item>
                        <Button variant="primary">Primary</Button>{' '}
                        <Button variant="danger">Danger</Button>{' '}
                        </ListGroup.Item> */}
          </ListGroup>
        </Col>
        <Col md={9}>
          {Array.from({ length: 5 }).map((_, idx) => (
            <ProductForListComponent
              key={idx}
              images={["games", "monitors", "tablets", "games", "monitors"]}
            />
          ))}
        </Col>
        <Col md={9} style={{}}>
          <PaginationComponent />
        </Col>
      </Row>
    </Container>
  );
};
export default ProductListPage; // i do export here in order to import that file here in App.jsnp
