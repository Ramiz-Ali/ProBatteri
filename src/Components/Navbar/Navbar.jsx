import React from "react";
import Icon1 from "../../assets/icon.svg";
import Icon2 from "../../assets/Vector.png";
import Icon3 from "../../assets/Union.png";

const Navbar = () => {
  return (
    <div className="bg-[#A6C772] w-full h-[42px] flex items-center justify-around text-white px-4">
      {/* Feature 1 (Always Visible) */}
      <div className="flex items-center gap-2">
        <img src={Icon1} alt="Gratis Fragt" className="h-6 w-6" />
        <p className="text-sm">Gratis Fragt Tur/Retur på renoveringer</p>
      </div>
      
      {/* Feature 2 (Hidden on Small Screens) */}
      <div className="hidden md:flex items-center gap-2">
        <img src={Icon2} alt="2 Års garanti" className="h-6 w-6" />
        <p className="text-sm">2 Års garanti på renoveringer</p>
      </div>
      
      {/* Feature 3 (Hidden on Small Screens) */}
      <div className="hidden md:flex items-center gap-2">
        <img src={Icon3} alt="Kvalitets celler" className="h-6 w-6" />
        <p className="text-sm">Vi bruger kun kvalitets celler</p>
      </div>
    </div>
  );
};

export default Navbar;
