import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import phone from "./images/iphone.png";
import cnn from "./images/mark-cnn.png";
import reuters from "./images/mark-reuters.png";
import forbes from "./images/mark-forbes.png";
import vogue from "./images/mark-vogue.png";
import userMark from "./images/user.png";
import "./components/sections.css";
import ProfileSection from "./components/ProfileSection";
import "./App.css";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import "./style.css";
const App = () => {
  return (
    <>
      <div className="grid-container sub-grid">
        <Header />

        <img className="phone " src={phone} alt="" />

        <Hero />
        <div className="section">
          <div className="section-content section-first">
            <div className="content-marks  ">
              <img src={cnn} alt="" className="" />
              <img src={reuters} alt="" />
              <img src={forbes} alt="" />
              <img src={vogue} alt="" />
            </div>
            <img className="userMark" src={userMark} alt="" />
            <div className="wrapper ml-0">
              <h1 className="title">
                Check out faster than you can say “Fast Checkout”
              </h1>

              <p className="text">
                No more resetting passwords or painstakingly typing in your
                billing and shipping address. Join people in 35 countries who
                are checking out with Fas
              </p>
            </div>
          </div>
        </div>
        <div className="section  section-second">
          <div className="section-content ">
            <div className="wrapper ml-0">
              <h1 className="title">All your purchases in one place</h1>
              <p className="text">
                Manage all your Fast transactions in a single dashboard. Track
                shipments, handle returns, and reorder items — all with one
                click
              </p>
            </div>
          </div>
        </div>
        <div className="section section-third ">
          <div className="section-content ">
            <div className="wrapper ml-0">
              <h1 className="title">The easiest way to track packages</h1>
              <p className="text">
                Package tracking is all over the place, so we’re fixing that.
                Fast Tracking lets you easily see when all your items will show
                up.
              </p>
            </div>
            <div className="barra-container">
              <div className="barra-secondary"></div>
            </div>
          </div>
        </div>
      </div>
      <ProfileSection></ProfileSection>
      <Comments />

      <Footer />
    </>
  );
};

export default App;
