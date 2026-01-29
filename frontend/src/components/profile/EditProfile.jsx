import React, { useState } from "react";
import { Camera } from "lucide-react";
import Input from "../Input/Input";
import TxtArea from "../Input/TxtArea";

function EditProfile({ onClose }) {
  return (
    <>
      <div className="p-2">
        <div className="flex items-center justify-center gap-10 text-white">
          <div className="flex cursor-pointer items-center justify-center rounded-full px-2 py-1 text-2xl hover:bg-[rgba(67,67,67,0.7)]">
            <button onClick={onClose}>✕</button>
          </div>
          <h1 className="text-xl">Edit Profile</h1>
          <button className="ml-auto cursor-pointer rounded-2xl bg-white px-4 py-2 text-sm font-bold text-black hover:bg-[rgba(200,198,198,0.94)]">
            Save
          </button>
        </div>

        <div className="relative">
          <div className="relative h-45 w-full border">
            <img
              src="/banner.jpg"
              className="h-full w-full object-cover blur-[2px]"
              alt=""
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center text-white">
              <button className="cursor-pointer rounded-full bg-[rgba(67,67,67,0.7)] p-2 hover:bg-white hover:text-black">
                <Camera />
              </button>
            </div>
          </div>

          <div className="bottom absolute inset-x-0 top-28 ml-5 h-33.5 w-33.5 overflow-hidden rounded-full border-4 border-black bg-gray-300">
            <div className="absolute inset-0 z-10 flex items-center justify-center text-white">
              <button className="cursor-pointer rounded-full bg-[rgba(67,67,67,0.7)] p-2 hover:bg-white hover:text-black">
                <Camera />
              </button>
            </div>
            <img
              src="/userLogo1.jpg"
              className="opacity-0.1 h-full w-full object-cover"
              alt="Profile"
            />
          </div>
        </div>
        <div className="h-20" />

        <div>
          <Input className="rounded-sm text-white" placeholder="Name" />
          <Input className="rounded-sm text-white" placeholder="Bio" />
        </div>
      </div>
    </>
  );
}

export default EditProfile;
