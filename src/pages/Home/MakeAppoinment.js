import React from "react";
import appoinment from "../../Assets/images/appointment.png";
import doctor from "../../Assets/images/doctor.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppoinment = () => {
  return (
    <section
      style={{ background: `url(${appoinment})` }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="doctor" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary font-bold">Appoinment</h3>
        <h2 className="text-3xl text-white">Make an Appoinment Today</h2>
        <p className="text-white">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s,{" "}
        </p>
        <PrimaryButton>Get Appoinment</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppoinment;
