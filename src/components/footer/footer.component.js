import React from "react";
import { FooterContainer, Link } from "../footer/footer.style";

function Footer() {
  return (
    <FooterContainer>
      <span>
        2020 PTRKLK
      </span>
      
      <span>
      Photo by
      <Link
        href="https://unsplash.com/@jessbailey?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
        target="_blank"
        rel="noopener noreferrer"
        title="Download free do whatever you want high-resolution photos from Jess Bailey"
      >
        {" "}Jess Bailey
      </Link>
      </span>
      
    </FooterContainer>
  );
}

export default Footer;
