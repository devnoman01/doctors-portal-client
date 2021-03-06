import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../../Components/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ForgetPasswordModal from "../../Components/ForgetPasswordModal";
import useToken from "../../hooks/useToken";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [token] = useToken(user || gUser);

  let signInError;

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading || gLoading) {
    return <Loading />;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-600">{error?.message || gError?.message}</p>
    );
  }

  // if (token) {
  //   navigate(from, { replace: true });
  // }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="container flex justify-center mx-auto px-4">
      <div className="card mx-auto mt-28 w-full md:max-w-sm bg-base-100 border border-gray-200 shadow-lg">
        <div className="card-body items-center text-center">
          <h2 className="text-2xl font-medium mb-4">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-md">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email Required",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Provide Valid Email",
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
              {errors.email?.type === "required" && (
                <span className="text-sm text-left text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="text-sm text-left text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="form-control w-full mb-5">
              <label className="label">
                <span className="text-md">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 character",
                  },
                })}
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full"
              />
              {errors.password?.type === "required" && (
                <span className="text-sm text-left text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-sm text-left text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>
            {signInError}
            <input
              value="Login"
              type="submit"
              className="input input-bordered w-full bg-accent text-white uppercase font-medium"
            />
          </form>
          <p className="text-sm text-left mt-1 mb-0">
            Forgot Password?{" "}
            <label
              htmlFor="forget-password-model"
              className="btn btn-sm px-1 py-0 bg-transparent border-none hover:bg-transparent modal-button text-secondary font-medium"
            >
              Reset Here
            </label>
          </p>
          <p className="text-sm text-center mt-1">
            New to Doctors Portal?{" "}
            <Link to="/signup" className="text-secondary font-medium">
              Create new account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline gap-2 w-full"
          >
            <img
              className="w-5 h-5"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt=""
            />
            Continue with Google
          </button>
        </div>
      </div>
      <ForgetPasswordModal />
    </div>
  );
};

export default Login;
