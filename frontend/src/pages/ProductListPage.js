import { Container, Row, Col,Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import SortOptionsComponent from '../components/SortOptionsComponent.js'
import RatingfilterComponent from '../components/filterQueryResultOptions/RatingFilterComponent.js'
const ProductListPage = () => {//arrow function
    // return <p>This is Product List Page </p>
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item><SortOptionsComponent/></ListGroup.Item>
                        <ListGroup.Item><RatingfilterComponent/></ListGroup.Item>
                        {/* <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                        <ListGroup.Item>
                        <Button variant="primary">Primary</Button>{' '}
                        <Button variant="danger">Danger</Button>{' '}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={9}>

                </Col>
            </Row>
        </Container>
    )
}
export default ProductListPage;// i do export here in order to import that file here in App.js