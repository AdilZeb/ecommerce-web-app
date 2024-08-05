import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between m-6 min-w-screen border border-t-[#c0c0ce]   h-[5rem] bg-[#f0f0f0] items-center">
      <div>Designed By Adil Zeb </div>
      <div className="flex justify-center flex-col items-center space-y-2">
        <Image src="/navicon.png" alt="logo" width={100} height={100} />
        <p>© 2024 Adil Zeb . All rights reserved.</p>
      </div>
      <div>
        <h3>Follow me on Github </h3>
      </div>
    </footer>
  );
};

export default Footer;
