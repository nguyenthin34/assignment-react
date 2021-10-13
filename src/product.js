import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { remove } from "./api/productapi";
import "./css/prdcss.css";
import "./css/search.css";
import Navb from "./nav";
import { useState } from "react";
export default function Product(props) {
  const removeProduct = async (id) => {
    try {
      remove(id);
      props.onDelete(id);
    } catch (error) {}
  };

  const [ids, setID] = useState("");
  const onHandChange = (e) => {
    setID(e.target.value);
  };
  return (
    <div>
      <Navb />
      <div className="row">
        <div class="Card mt-2">
          <div class="CardInner">
            <form>
              <label>Search for your name's product</label>
              <div class="css_container">
                <div class="Icon">
                  <Link role="button" to={"/product/details/" + ids}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#657789"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-search"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </Link>
                </div>
                <div class="InputContainer">
                  <input placeholder="enter id" onChange={onHandChange} />
                </div>
              </div>
            </form>
          </div>
        </div>
        {props.products.map((product) => (
          <div className="card col-md-3 m-5" style={{ width: "18rem" }}>
            <img src={product.avatar} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{product.id}</li>
              <li className="list-group-item">{product.price}</li>
              <li className="list-group-item">{product.description}</li>
            </ul>
            <button
              type="button"
              className="btn_delete"
              onClick={() => removeProduct(product.id)}
            >
              Xóa
            </button>
            <div className="btn-group">
              <Link
                role="button"
                className="btn_update"
                to={"/product/edit/" + product.id}
              >
                Chỉnh sửa
              </Link>
            </div>
            <div className="btn-group">
              <Link
                role="button"
                className="btn_update"
                to={"/product/detail/" + product.id}
              >
                Chi Tiết
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
