import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import InfoCard from "./InfoCard";

const Info = () => {
  return (
    <div className="flex flex-wrap justify-around items-center gap-3 my-5">
      <InfoCard
        bgClass="bg-gradient-to-r from-secondary to-primary"
        icon={<AiOutlineClockCircle />}
        title="Opening Hours"
        desc=""
      />
      <InfoCard
        bgClass="bg-accent"
        icon={<GoLocation />}
        title="Visit Our Location"
        desc=""
      />
      <InfoCard
        bgClass="bg-gradient-to-r from-secondary to-primary"
        icon={<MdOutlinePhoneInTalk />}
        title="Contact Us Now"
        desc=""
      />
    </div>
  );
};

export default Info;
