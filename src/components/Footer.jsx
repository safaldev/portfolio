import React from "react";
import { Github, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <hr />
      <footer className="w-full bg-background/90 h-58 lg:h-16 px-4 flex flex-col lg:flex-row gap-4 text-center items-center lg:justify-between lg:px-42 py-4">
        <div>&copy; {year} Safal Chhetri | contact@safalchhetri.com.np</div>
        <div className="flex flex-row gap-4">
          <a
            href="https://github.com/safaldev"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>

          <a
            href="https://linkedin.com/in/safaldev"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>

          <a href="https://x.com/safal2064" target="_blank" rel="noreferrer">
            <Twitter />
          </a>

          <a
            href="https://instagram.com/safalchhetri_"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
