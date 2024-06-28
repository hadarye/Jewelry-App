import { react } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  const products = [{
    "name": "שרשראות",
    "img": "",
    "id": "necklaces"
  },
  {
    "name": "צמידים",
    "img": "",
    "id": "bracelets"
  },
  {
    "name": "עגילים",
    "img": "",
    "id": "earings"
  },
  {
    "name": "טבעות",
    "img": "",
    "id": "rings"
  }];

  return (
    <div className="home-page">
      <div>
        <h3 className="main-header">create your own</h3>
        <div className="cards-grid">
          <div className="card">
            <div className="image bracelet"></div>
            <span>צמידים</span>
          </div>
          <div className="card" onClick={() => navigate("/createyourown")}>
            <div className="image necklace"></div>
            <span>שרשראות</span>
          </div>
          <div className="card">
            <div className="image necklace"></div>
            <span>עגילים</span>
          </div>
        </div>
      </div>
      <div className="products">
        {products.map((product) => (
            <div key={product.id} onClick={() => navigate(`/${product.id}`)}>
                <div>{product.name}</div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
