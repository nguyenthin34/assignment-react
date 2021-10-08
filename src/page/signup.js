import { propTypes } from "react-bootstrap/esm/Image";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
//hellooooo
export default function Add(props) {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Trường email không được bỏ trống</span>}
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="password"
          className="form-control"
          {...register("password", { required: true })}
        />
        {errors.pasword && <span>Trường pasword không được bỏ trống</span>}
      </div>
      <button type="submit" className="btn btn-info">
        Thêm sản phẩm
      </button>
    </form>
  );
}
