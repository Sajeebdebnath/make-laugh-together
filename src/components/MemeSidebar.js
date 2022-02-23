import React from "react";

const MemeSidebar = () => {
  return (
    <div className="col-lg-3 col-md-3">
      <div className="meme-sidebar">
        <div className="logo-text">Make-Laugh-Together</div>
        <div className="sidebar-text">
          <p>This is a fun project inspiration from Internet.</p>
          <p>
            Firstly, You have choose a template or upload your own meme, then
            add top & bottom text, move text around with randomly. You can save
            image to click on Download meme button.
          </p>
          <div className="copyright">
            Made by{" "}
            <a
              target={"_blank"}
              href="https://www.facebook.com/sajeebdebnath.cse"
              rel="noreferrer"
            >
              Sajeeb Debnath
            </a>{" "}
            with ❤
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeSidebar;
