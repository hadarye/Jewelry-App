import { react } from "react";
import "./CreateYourOwn.scss";
import stock from "../../Assets/Stock";

const CreateYourOwn = () => {
  return (
    <>
      {" "}
      <div className="create-your-own">
        <h3 className="main-header">שרשראות בעיצוב אישי</h3>
        <span className="description">
          בעמוד זה תוכלו להרכיב תכשיט לגמרי בעצמכן. בחרו שרשרת, תליונים וסוגר.
        </span>
        <div className="chain-page">
          {stock[0].necklaces.chains.map((chain) => (
            <div className="item-container">
              <img
                className="item-img"
                src={process.env.PUBLIC_URL + chain.img}
                alt={chain.name}
              ></img>
              <span>{chain.name}</span>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className="next-banner">
        <button>המשך</button>
      </div>
    </>
  );
};

export default CreateYourOwn;
