import { react, useState } from "react";
import { useNavigate } from "react-router-dom";
import menu from "../../Assets/Images/menu.png";
import cart from "../../Assets/Images/shopping-cart.png";
import "./NavBar.scss";

const NavBar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const products = [
    {
      name: "שרשראות",
      id: "necklaces",
    },
    {
      name: "צמידים",
      id: "bracelets",
    },
    {
      name: "עגילים",
      id: "earings",
    },
    {
      name: "טבעות",
      id: "rings",
    },
  ];

  const handleMenu = (isMenu) => {};
  return (
    <>
      <div className="nav-bar">
        <img
          className="icon"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          src={menu}
        ></img>
        <h1 className="logo-header" onClick={() => navigate("home")}>
          refined
        </h1>
        <img className="icon" src={cart}></img>
      </div>
      {isMenuOpen && (
        <div className="menu-side-bar">
          {products.map((product) => (
            <div key={product.id} onClick={() => {setIsMenuOpen(false); navigate(`/${product.id}`)}}>
              {product.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default NavBar;
