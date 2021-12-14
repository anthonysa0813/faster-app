import React from "react";
import "./footer.css";
import FooterModal from "./FooterModal";
const Footer = () => {
  return (
    <footer>
      <FooterModal />
      <div className="footerContainer ">
        <div className="socials">
          <h3>FASTER</h3>
          <span>2021 Fast AF, Inc.</span>
          <div className="iconsSocials">
            <i className="icon-instagram"></i>
            <i className="icon-linkedin"></i>
          </div>
        </div>

        <div className="footerProducts">
          <h3>Product</h3>
          <ul>
            <li>Checkout</li>
            <li>Sellers</li>
            <li>Partners</li>
            <li>Pricing</li>
            <li>Seller Stories</li>
            <li>Privarcy & Secutiry</li>
            <li>Customer Stories</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="footerTerms">
          <h3>Product</h3>
          <ul>
            <li>Checkout</li>
            <li>Sellers</li>
            <li>Partners</li>
            <li>Pricing</li>
            <li>Seller Stories</li>
            <li>Privarcy & Secutiry</li>
            <li>Customer Stories</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
