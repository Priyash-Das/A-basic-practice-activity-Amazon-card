import "./Product.css";
import Price from "./Price";
import Image from "./Image";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";

function Product({ title, idx }) {
  let oldPrices = ["59,999", "49,999", "79,900", "134,999"];
  let newPrices = ["41,999", "39,999", "68,900", "84,999"];
  let descriptions = [
    "Snapdragon 8 Gen 3",
    "Snapdragon 8 Gen 3",
    "Build For Apple Intelligence",
    "Your True AI Companion",
  ];
  let images = [img1, img2, img3, img4];
  return (
    <div className="product">
      <Image src={images[idx]} alt={title} />
      <h4 style={{ padding: "2px" }}>{title}</h4>
      <p>{descriptions[idx]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
