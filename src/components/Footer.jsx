import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <em>
        <p>Copyright ⓒ {year}</p>
      </em>
    </footer>
  );
}

export default Footer;
