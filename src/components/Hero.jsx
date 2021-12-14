import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero-container  ">
      <div className="wrapper ml-0 hero-info ">
        <h1>
          One click. <br />
          No passwords. <br /> The world's fastest checkout.
        </h1>
        <p>
          Forget passwords. Skip long entry forms. Shop online and securely
          check out with a single click. It’s safe, easy, and yep, fast.
        </p>
        <button>Sing up for Fast</button>
        <a href="#">Get Fast for your business</a>
      </div>
    </div>
  );
};

export default Hero;
