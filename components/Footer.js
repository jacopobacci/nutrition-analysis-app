import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <p>&copy; {new Date().getFullYear()} Jacopo Bacci </p>
        <p> Thanks to Edamam API & Pixabay API</p>
      </footer>
    </div>
  );
};

export default Footer;
