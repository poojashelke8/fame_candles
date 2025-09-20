import React from "react";
import "../Components/Styles/Home.css";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import candle_img from "../assets/candle.jpg";
import candle_img3 from "../assets/candle3.jpg";

import candle_img4 from "../assets/candle4.png";
import nature_img from "../assets/nature.png";
import scented_img from "../assets/scented.png";
import cozy_candle from "../assets/cozy_candle.jpg";

const Home = () => {
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
    <div className="home_main">
      <div className="home_2">
        <div className="candle_img">
          <img
            src={candle_img}
            className="candle1"
            //   className="w-full max-w-[550px] h-auto md:w-[70%] lg:w-[40%]"
            alt="candle"
          />
        </div>
        <div className="home_title">
          <p className="heading_1">“Ignite Serenity. Elevate Every Moment.” </p>
          <p className="heading_2">
            Glow softly, breathe deeply—transforming spaces into soothing
            retreats.
          </p>
        </div>
      </div>
      <div className="home_3">
        <img src={scented_img} className="nature_img" alt="candle" />
        <p className="nature_text">
          Be Like a Candle,give your warmth and light to others
        </p>
      </div>
      <div className="products">
        <p className="heading_1">Our Products</p>
        <div className="cards">
          <div className="candle_card">
            <img src={candle_img3} className="card_img" />
            <div className="card_data">
              <p>Category 1</p>
              <p>Price:</p>
            </div>
          </div>
          <div className="candle_card">
            <img src={candle_img3} className="card_img" />
            <div className="card_data">
              <p>Category 2</p>
              <p>Price:</p>
            </div>
          </div>
          {/* <div className="candle_card">
            <img src={candle_img3} className="card_img" />
            <div className="card_data">
              <p>Category 3</p>
              <p>Price:</p>
            </div>
          </div>
          <div className="candle_card">
            <img src={candle_img3} className="card_img" />
            <div className="card_data">
              <p>Category 4</p>
              <p>Price:</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="features">
        <div className="features_1">
          <p className="heading_1">Best Service Features</p>
          <p className="heading_2">
            We offer a variety of services designed to enhance your candle
            experience
          </p>
          <button className="shop_btn">Dm for Shop</button>
        </div>
        <div className="features_2">
          <div className="service">
            <p className="heading_3">Natural and Sustainable</p>
            <p className="heading_2">
              We believe in quality and environmental sustainability.Our candles
              are made from non-toxic material.
            </p>
          </div>
          <div className="service">
            <p className="heading_3">Fast Shipping</p>
            <p className="heading_2">
              We understand how important it is to receive products quickly.With
              our fats delivery service
            </p>
          </div>
          <div className="service">
            <p className="heading_3">Personal Assistance</p>
            <p className="heading_2">
              We are always ready to assist you with friendliness and care.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer_head">
          <p className="heading_1">Fame Candles</p>
          <p className="heading_2">
            We are committed to provide to providing an exceptional scented
            candle shopping experience with fast and friendly service.
          </p>
        </div>
        <div className="connect">
          <p className="heading_3">Connect with us</p>
          <div className="socials">
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
            {/* <FaWhatsapp size={18} /> */}
          </div>
          <p className="heading_3">Contact</p>
          <p className="heading_2"> 7249571525</p>
          <p className="heading_2">famecandle@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
