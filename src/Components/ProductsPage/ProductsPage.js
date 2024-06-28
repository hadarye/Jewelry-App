import { react } from "react";
import "./ProductsPage.scss";
import rings from "../../Assets/Rings";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="create-your-own">
        <div className="chain-page">
          {rings.map((item) => (
            <div className="item-container" onClick={() => navigate(`/product/${item.name}`)}>
              <img
                className="item-img"
                src={process.env.PUBLIC_URL + item.img}
                alt={item.name}
              ></img>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
