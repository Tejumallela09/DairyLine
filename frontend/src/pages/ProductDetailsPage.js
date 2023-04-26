import { useParams } from "react-router-dom";
const ProductDetailsPage= () =>{//arrow function
    const { id }=useParams();
    console.log(id);
    return <p>This is Product Details Page </p>
};
export default ProductDetailsPage;// i do export here in order to import that file here in App.js