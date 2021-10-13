import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { remove } from "./api/productapi";
import "./css/prdcss.css";
import "./css/search.css";
import Navb from "./nav";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { get } from "./api/productapi";
import { useForm } from "react-hook-form";
export default function Product(props) {
  const removeProduct = async (id) => {
    try {
      remove(id);
      props.onDelete(id);
    } catch (error) {}
  };
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("https://6153c7069935230017557055.mockapi.io/product/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, {});
  return (
    <div>
      <Navb />
      <div className="card" style={{ width: "18rem" }} align="center">
        <img src={product.avatar} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Profile</h5>
          <p className="card-text">desc: {product.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">ID: {product.id}</li>
          <li className="list-group-item">Name: {product.name}</li>
          <li className="list-group-item">Price: {product.price}</li>
        </ul>
      </div>
    </div>
  );
}
