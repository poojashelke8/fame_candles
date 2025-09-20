import React from "react";
// import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const instagramUsername = "the_fame_candles"; // replace with your ID, e.g. "instagramUser"
  const whatsappNumber = "917249571525"; // international format, no + and no spaces
  const prefilledMessage = "Hello, I found you via your site.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      prefilledMessage
    )}`;
    window.open(url, "_blank");
  };

  const openInstagram = () => {
    window.open(`https://www.instagram.com/${instagramUsername}/`, "_blank");
  };
  return (
    <div className="p-[20px] h-24 w-full flex justify-end  md:w-[70%] ">
      <div className="flex justify-between w-[60%] ">
        <p className="heading_1">FAME</p>
        <div className="flex gap-[10px]">
          <span onClick={openInstagram} style={{ cursor: "pointer" }}>
            <FaInstagram size={18} />
          </span>
          {/* <FaInstagram size={18} /> */}
          <span
            onClick={openWhatsApp}
            style={{ cursor: "pointer", marginLeft: 10 }}
          >
            <FaWhatsapp size={18} />
          </span>
          {/* <FaInstagram size={24} />
          <FaWhatsapp size={24} /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
