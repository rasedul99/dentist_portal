import React from "react";

const InfoCard = ({ icon, title, desc,bgClass }) => {
  return (
    <div>
      <div className={`card card-side shadow-xl text-white px-2 ${bgClass}`}>
        <div className="flex items-center justify-center">
          <h3 className="text-3xl">{icon}</h3>
        </div>
        <div class="card-body ">
          <h2 class="card-title ">{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
