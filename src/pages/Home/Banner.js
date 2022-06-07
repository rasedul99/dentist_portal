import React from "react";
import banner from "../../Assets/banner_cover.jpg";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">
              A better Life Starts with a beautiful Smile
            </h1>
            <p class="py-6">Take care of your body,It will take care of you</p>
            <PrimaryButton>Get Appoinment</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
