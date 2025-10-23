import React, { use } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../Provider/AuthContext";
import toast from "react-hot-toast";

const Reset = () => {
      
    const {forgetPass}=use(AuthContext)
    const handlereset =(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        forgetPass(email)
        .then(()=>{
            window.open("https://mail.google.com", "_blank");
            
        })
        .catch((error)=>{
            toast.error(error.message)
        })


    }
  return (
    <div>
      <form onSubmit={handlereset} className="flex justify-center items-center h-[100vh] ">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="text-center text-[16px] font-bold">Reset Password</label>

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Email"
          />

          <button className="btn btn-neutral mt-4">Reset</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Reset;
