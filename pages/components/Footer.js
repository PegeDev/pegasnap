import { useEffect, useState } from "react";
import React from "react";
const Footer = () => {
  const [time, setTime] = useState("");

  const cektime = () => {
    try {
      const time = new Date();
      setTime(time.getFullYear());
    } catch (err) {}
  };
  useEffect(() => {
    cektime();
  }, []);
  return (
    <div className="w-full  from-primary to-[#005e61] bg-gradient-to-b h-[100px] py-8">
      <div className="flex flex-col items-center">
        <p className=" text-white text-[12px] sm:text-[14px]">
          © 2021 - {time} (V2) <span className="font-semibold">PegaSnap</span>.
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
