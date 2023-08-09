import "./Product.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./ProData";
import { useNavigate } from "react-router-dom";


export default function Pages() {
  const product = productData.map((item) => (
    <Product
      key={item.id} 
      id={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  const navigate = useNavigate();

  const redirectToProductSection = () => {
    navigate('/Main');
  };


  return (

    <div className="Product-head">
      <h1>Buy Your Product </h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
      <button className="btnn" onClick={redirectToProductSection}>
    <h5> 
        Go to Store Section
        </h5>
      </button>
    </div>
  );
}