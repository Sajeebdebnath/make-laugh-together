import React from "react";

const MemeItem = ({ modalOpen, setModalOpen }) => {
  return (
    <div className="col-lg-3 col-sm-4">
      <div className="single-template" onClick={() => setModalOpen(!modalOpen)}>
        <button className="use-template">use this template</button>
        <span className="meme-top-caption">Top Caption</span>
        <img
          src="https://i.imgflip.com/4acd7j.png"
          alt="Meme Template"
          width="100%"
        />
        <span className="meme-bottom-caption">Bottom Caption</span>
      </div>
    </div>
  );
};

export default MemeItem;
