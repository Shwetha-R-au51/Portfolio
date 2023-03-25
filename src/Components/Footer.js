import React from "react";
import "./Footer.css";
import HomeSocial from "./Home/HomeSocial.js";

function Footer() {
  return (
    <footer>
      <p className="footer_title">Shwetha R</p>

      <div className="footerSocial">
        {HomeSocial &&
          HomeSocial.map((social) => (
            <a href={social.iconLink} key={social.id}>
              {social.iconName}
            </a>
          ))}
      </div>

      <p className="copy_right">&#169; All copyright right reserved @ 2023 and 2024</p>
    </footer>
  );
}

export default Footer;
