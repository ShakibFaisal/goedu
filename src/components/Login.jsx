import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <form className="flex justify-center items-center my-[100px]">
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

          <button className="btn btn-neutral mt-4">Login</button>
          <p>
            New in our website ?{" "}
            <Link className="text-blue-500" to={"/register"}>
              Register
            </Link>
            
          </p>
          <button className="btn btn-active">Default</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
