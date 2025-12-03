// import React, { use, useState } from "react";
// import { Link, useNavigate } from "react-router";
// import { FcGoogle } from "react-icons/fc";
// import { AuthContext } from "../Provider/AuthContext";
// import toast from "react-hot-toast";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// const Register = () => {
//   const [error, seterror] = useState("");
//   const { createUserEP, googleLogin, updateUser } = use(AuthContext);
//   const navigate = useNavigate();
//   const handleform = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const photo = e.target.photo.value;
//     const password = e.target.pass.value;
//     const name = e.target.name.value;
//     seterror("");
//     if (password.length < 6) {
//       seterror("Password must be at least 6 characters long");
//       return;
//     }
//     if (!/[A-Z]/.test(password)) {
//       seterror("Password must contain at least one uppercase letter");
//       return;
//     }
//     if (!/[a-z]/.test(password)) {
//       seterror("Password must contain at least one lowercase letter");
//       return;
//     }
//     createUserEP(email, password)
//       .then(() => {
//         toast.success("Registered successfully");
//         navigate("/");
//         updateUser(name, photo);
//       })
//       .catch((error) => {
//         toast.error(error.message);
//       });
//   };
//   const handlebtn = (e) => {
//     e.preventDefault();
//     googleLogin()
//       .then(() => {
//         navigate("/");
//       })
//       .catch((error) => {
//         toast(error.message);
//       });
//   };

//     const [showPassword, setShowPassword] = useState(false);

//     const togglePassword = () => setShowPassword(!showPassword);

//   return (
//     <div className="my-[100px]">
//       <form
//         onSubmit={handleform}
//         className="flex justify-center items-center mt-[100px]"
//       >
//         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
//           <label className="text-center text-[16px] font-bold">Register</label>

//           <label className="label">Name</label>
//           <input
//             type="text"
//             className="input"
//             name="name"
//             placeholder="Full Name"
//             required
//           />
//           <label className="label">Photo-URL</label>
//           <input
//             type="text"
//             className="input"
//             name="photo"
//             placeholder="Photo-URL"
//             required
//           />
//           <label className="label">Email</label>
//           <input
//             type="email"
//             className="input"
//             name="email"
//             placeholder="Email"
//           />

//           <div className="relative w-full max-w-md mx-auto ">
//             <label className="label">Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               className="input"
//               name="pass"
//               placeholder="Password"
//             />
//             <button
//               type="button"
//               onClick={togglePassword}
//               className="absolute right-3 top-2/3  transform -translate-y-1/2 text-gray-500"
//             >
//               {showPassword ? (
//                 <AiOutlineEyeInvisible size={20} />
//               ) : (
//                 <AiOutlineEye size={20} />
//               )}
//             </button>{" "}
//           </div>
//           <button className="btn btn-neutral mt-4">Register</button>

//           <p className="text-red-600">{error}</p>

//           <p>
//             Already have account ?{" "}
//             <Link className="text-blue-500" to={"/login"}>
//               Login
//             </Link>
//           </p>
//         </fieldset>
//       </form>
//       <div className="flex justify-center">
//         <button onClick={handlebtn} className="btn  btn-active mt-2.5">
//           {" "}
//           <FcGoogle /> Continue with Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../Provider/AuthContext";

const Register = () => {
  const [error, setError] = useState("");
  const { createUserEP, googleLogin, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const handleform = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.pass.value;

    setError("");

    // Validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }

    createUserEP(email, password)
      .then(() => {
        updateUser(name, photo);
        toast.success("Registered Successfully");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handlegoole = () => {
    googleLogin()
      .then(() => {
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#faf7ef] px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row">
        {/* LEFT SECTION */}
        <div className="md:w-1/2 w-full bg-primary text-white p-10 md:p-16 flex flex-col justify-center items-center text-center">
          <div className="text-5xl mb-6">📚</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Join GoEdu</h2>
          <p className="text-base md:text-[16px] opacity-90 max-w-xs">
            Create an account and start learning, sharing knowledge, and
            exploring new skills 🌟 to grow your mind and support your learning
            community.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="md:w-1/2 w-full p-8 md:p-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2">
            Create Your Account 
          </h2>

          <form onSubmit={handleform} className="space-y-4">
            {/* Name */}
            <div>
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full border rounded-lg px-4 py-3 mt-1 outline-none"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="font-semibold">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Profile image URL"
                className="w-full border rounded-lg px-4 py-3 mt-1 outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-3 mt-1 outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="font-semibold">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="pass"
                placeholder="Create a strong password"
                className="w-full border rounded-lg px-4 py-3 mt-1 outline-none"
                required
              />

              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-[55%] transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={22} />
                ) : (
                  <AiOutlineEye size={22} />
                )}
              </button>
            </div>

            {/* Error */}
            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg text-lg font-semibold shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
            >
              Register
            </button>
          </form>

          {/* Google Button */}
          <button
            onClick={handlegoole}
            className="w-full border py-3 rounded-lg mt-6 flex items-center justify-center gap-3 text-lg"
          >
            <FcGoogle /> Register with Google
          </button>

          <p className="mt-6 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
