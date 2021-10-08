import { useHistory, useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { get, update } from "./api/productapi";
export default function Edit(props) {
  let history = useHistory();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [products, setProduct] = useState({});
  useEffect(() => {
    get(id).then((response) => {
      setProduct(response.data);
      reset(response.data);
    });
  }, [reset]);
  const onSubmit = (data) => {
    const product = {
      id: id,
      ...data,
    };
    update(product).then((response) => {
      props.onUpdate(response.data);
      history.push("/product");
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          {...register("name")}
          defaultValue={products.name}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          className="form-control"
          {...register("price")}
          defaultValue={products.price}
        />
      </div>
      <button type="submit" className="btn btn-info">
        Update
      </button>
    </form>
  );
}
