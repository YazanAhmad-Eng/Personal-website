import React from "react";

function Footer() {
  return (
    <footer className="footer has-background-link">
      <div className="content has-text-centered has-text-white">
      <p>
        Modified at <i className="fas fa-home"></i> by{" "}
          <a href="https://github.com/YazanAhmad-Eng" className="has-text-white">
            <strong>Yazan Ahmad</strong>
          </a> 

        </p>
        <p>
        Email:ayazan4@gmail.com || 
          Phone: +962798956983
        </p>
        <p>
          Built at <i className="fas fa-moon"></i> by{" "}
          <a href="https://github.com/jcoelho93" className="has-text-white">
            <strong>José Coelho</strong>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
