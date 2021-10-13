import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import "./sigbup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
export default function Add(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      toast.success("Đăng Ký thành công");
      const { user } = result;
      console.log(user);
    } catch (error) {
      toast.error(error.message);
    }
    // Signup(data);
  };
  return (
    <div className="container">
      <div className="left">
        <div className="header">
          <h2 className="animation a1">Welcome to</h2>
          <h4 className="animation a2">
            Log up to your account using your info
          </h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <ToastContainer />
          {/* <input
            type="text"
            className="form-field animation a3"
            placeholder="User Name"
            {...register("username", { required: true })}
          />
          <input
            type="text"
            className="form-field animation a3"
            placeholder="Full name"
            {...register("name", { required: true })}
          /> */}
          <input
            type="email"
            className="form-field animation a3"
            placeholder="Email Address"
            {...register("email", { required: true })}
          />
          <input
            type="password"
            className="form-field animation a4"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <button className="animation a6">Sign Up</button>
          <button>
            <Link role="button" to={"/signin"}>
              Back
            </Link>
          </button>
        </form>
      </div>
      <div className="right" />
    </div>
  );
}
