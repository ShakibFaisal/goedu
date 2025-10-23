import React, { useState } from "react";
import { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, updateUser } = use(AuthContext);
  const [updateProfile, setUpdateProfile] = useState(false);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUser(name, photo)
      .then(() => {
        toast.success("Profile Update Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className=" flex items-center justify-center bg-base-200 p-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
          <div className="flex justify-center mb-5">
            <img
              src={user.photoURL || "https://i.ibb.co/MBtjqXQ/no-image.png"}
              alt="User Avatar"
              className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-md"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            {user.displayName}
          </h2>
          <p className="text-gray-600 mb-5">{user.email}</p>

          <button
            onClick={() => setUpdateProfile(true)}
            className="btn btn-primary text-white w-full"
          >
            Update Profile
          </button>
        </div>
      </div>
      {updateProfile && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Update profile button
          </h2>
          <form  onSubmit={handleUpdateProfile} className="max-w-md mx-auto bg-base-200 p-5 rounded-xl shadow-sm">
            <div className=" mb-4">
              <label className="label font-semibold">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input w-full"
                required
              />
            </div>
            <div className=" mb-4">
              <label className="label font-semibold">Photo-URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your Photo-URL"
                className="input w-full"
                required
              />
            </div>

            <button
              
              type="submit"
              className="btn btn-primary w-full text-white"
            >
              Update
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Profile;
