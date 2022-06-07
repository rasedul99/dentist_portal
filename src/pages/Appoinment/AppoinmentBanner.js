import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../Assets/images/chair.png";

const AppoinmentBanner = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} alt="chair" class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
            <p>You have selected : {format(date, "PP")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
