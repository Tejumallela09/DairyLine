import CategoryCartComponent from "../components/CategoryCartComponent";
import ProductCarousalComponent from "../components/user/ProductCarousalComponent";
import { Row, Container } from "react-bootstrap";
const HomePage = () => {//arrow function
    const categories = ['Tablets', 'Monitors', 'Games','Milk'];
    return (<> <ProductCarousalComponent />
        <Container>
            <Row xs={1} md={2} className="g-4 mt-5">
                {
                    categories.map((category, idx) => <CategoryCartComponent key={idx} category={category} idx={idx} />)
                }
            </Row>
        </Container>
    </>
    )

};
export default HomePage;// i do export here in order to import that file here in App.js