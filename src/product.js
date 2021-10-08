import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useRouteMatch } from "react-router-dom";
import { remove } from "./api/productapi";

export default function Product(props) {
  const { url } = useRouteMatch();
  const removeProduct = async (id) => {
    try {
      remove(id);
      props.onDelete(id);
    } catch (error) {}
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>
                <Link to={"/product/detail/" + product.id}>{product.name}</Link>
              </td>
              <td>{product.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeProduct(product.id)}
                >
                  Xóa
                </button>
              </td>
              <td>
                <div className="btn-group">
                  <Link
                    role="button"
                    className="btn btn-primary"
                    to={"/product/edit/" + product.id}
                  >
                    Chỉnh sửa
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
