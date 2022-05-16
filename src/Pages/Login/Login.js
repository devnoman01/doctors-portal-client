import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  console.log(auth);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  if (user) {
    console.log(user);
  }

  return (
    <div className="container flex justify-center mx-auto px-4">
      <div className="card mx-auto mt-28 w-full md:max-w-sm bg-base-100 border border-gray-200 shadow-lg">
        <div className="card-body items-center text-center">
          <h2 className="text-2xl font-medium mb-4">Login</h2>
          <form onSubmit={handleLogin} className="w-full">
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="text-md">Email</span>
              </label>
              <input
                required
                name="email"
                type="email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="text-md">Password</span>
              </label>
              <input
                required
                name="password"
                type="password"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full ">
              <span className="text-sm text-left mt-1 mb-5">
                Forgot Password?
              </span>
            </div>
            <input
              value="Login"
              type="submit"
              className="input input-bordered w-full bg-accent text-white uppercase font-medium"
            />
          </form>
          <p className="text-sm text-center my-3">
            New to Doctors Portal?{" "}
            <span className="text-secondary font-medium">
              Create new account
            </span>
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
    </div>
  );
};

export default Login;
