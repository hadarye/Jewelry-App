import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import rings from "../../Assets/Rings";

const Product = () => {
  const { productName } = useParams();
  const [productObj, setProduct] = useState({});

  useEffect(() => {
    rings.forEach((product) => {
      if (product.name === productName) {
        setProduct(product);
      }
    });
  }, [productName]);

  return (
    <>
        <img src={productObj.img}></img>
      <div>{productObj.name}</div>
      
    </>
  );
};

export default Product;
