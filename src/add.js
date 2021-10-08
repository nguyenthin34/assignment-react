import { propTypes } from "react-bootstrap/esm/Image";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { add } from "./api/productapi";
//hellooooo
export default function Add(props) {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (product) => {
    try {
      const { data } = await add(product);
      props.onAdd(data);
      history.push("/product");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          {...register("name", { required: true })}
        />
        {errors.name && <span>Trường name không được bỏ trống</span>}
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input type="number" className="form-control" {...register("price")} />
        {errors.price && <span>Trường price không được bỏ trống</span>}
      </div>
      <button type="submit" className="btn btn-info">
        Thêm sản phẩm
      </button>
    </form>
  );
}
