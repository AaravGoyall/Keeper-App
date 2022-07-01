import React from "react";
const CurrentYear = new Date().getFullYear();
function  Footer(){
    return   <footer>
    <p>
      {"Copyright © "+CurrentYear}
    </p>
  </footer>
}
export default Footer;