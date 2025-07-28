import React from "react";

function Footer() {
  const date = new Date();
  const currentyear = date.getFullYear();
  return (
    <footer>
      <p>Copyright © {currentyear}</p>;
    </footer>
  );
}

export default Footer;
