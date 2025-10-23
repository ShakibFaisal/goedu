import React, { use, useState } from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, googleLogin, forgetPass } = use(AuthContext);
  const [email, setemail] = useState(null);
  const handleform = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    setemail(email);
    const password = e.target.pass.value;
    signIn(email, password)
      .then(() => {
        toast.success("Login Successfully");
        e.target.reset()
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handlegoole = () => {
    googleLogin()
      .then(() => {
        toast.success("Login Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleforget = () => {
    forgetPass(email);
  };
  return (
    <div>
      <form
        onSubmit={handleform}
        className="flex justify-center items-center  mt-[100px]"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="text-center text-[16px] font-bold">Login</label>

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            name="pass"
            placeholder="Password"
          />
          <div>
            <a
              onClick={handleforget}
              className="mt-2.5 hover:underline cursor-pointer"
            >
              Forget password ?
            </a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p>
            New in our website ?{" "}
            <Link className="text-blue-500 " to={"/register"}>
              Register
            </Link>
          </p>
        </fieldset>
      </form>
      <div className="flex justify-center">
        <button onClick={handlegoole} className="btn  btn-active  mb-[100px]">
          {" "}
          <FcGoogle /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
