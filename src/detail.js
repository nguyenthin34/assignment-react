import { useHistory, useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Navb from "./nav";
export default function Detail() {
  let history = useHistory();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("https://6153c7069935230017557055.mockapi.io/product/" + id)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <div>
      <Navb />
      <div className="card" style={{ width: "18rem" }} align="center">
        <img src={product.img} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Profile</h5>
          <p className="card-text">{product.desc}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{product.id}</li>
          <li className="list-group-item">{product.name}</li>
          <li className="list-group-item">{product.price}</li>
        </ul>
      </div>
    </div>
  );
}
