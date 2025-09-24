import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../RTX/Slices/userSlice";
import { UserCircle2Icon, UserRoundXIcon } from "lucide-react";

export default function Profile() {
  const userInfo = useSelector((state) => state.user.value); // [fname, lname, mobile, email]
  const dispatch = useDispatch();

  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-700/10 to-white flex items-center justify-center py-10 px-4">
      {userInfo ? (
        <div className=" rounded-2xl shadow-lg max-w-md w-full p-8 text-center">
          {/* Avatar */}
          <div className="w-24 h-24 mx-auto rounded-full text-white flex items-center justify-center text-3xl font-bold ">
            <UserCircle2Icon size={100} className="text-orange-700"/>
            
          </div>

          {/* Name */}
          <h1 className="mt-4 text-2xl font-bold text-gray-800">
            {userInfo.fname} {userInfo.lname}
          </h1>
          <p className="text-gray-500 text-sm">{userInfo.email}</p>

          {/* Info grid */}
          <div className="mt-6 grid grid-cols-1 gap-4 text-left text-sm">
            <div className="p-3 rounded-lg border border-gray-200">
              <span className="text-gray-500 block">Name</span>
              <span className="font-medium text-gray-800">
                {userInfo.fname} {userInfo.lname}
              </span>
            </div>
            <div className="p-3 rounded-lg border border-gray-200">
              <span className="text-gray-500 block">Email</span>
              <span className="font-medium text-gray-800">
                {userInfo.email}
              </span>
            </div>
            <div className="p-3 rounded-lg border border-gray-200">
              <span className="text-gray-500 block">Mobile</span>
              <span className="font-medium text-gray-800">
                {userInfo.mobile}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 justify-center">
            <button
              className="btn btn-primary"
              onClick={() => dispatch(clearUser())}
            >
              Logout
            </button>
            
          </div>
        </div>
      ) : (
        <h2 className="text-5xl text-gray-700 font-semibold flex flex-col gap-4">
          <UserRoundXIcon size={150} className=" text-orange-700 text-center mx-auto"/>
          <span>No user logged in</span>
        </h2>
      )}
    </section>
  );
}
