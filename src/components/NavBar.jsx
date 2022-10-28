import React from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="bg-stone-900 max-h-fit">
      <div className="p-5 flex space-x-2 items-center space-x-8 max-w-fit">
        <div>
          <FaBars size={25} className="text-yellow-300" />
        </div>
        <div className="p-2">
          <p className="text-white text-2xl">
            Best <span className="font-bold text-yellow-300">Eats</span>{" "}
          </p>
        </div>
        <div className="hidden md: dispaly text-white">
          <p>
            Delivery <span>Pickup</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
