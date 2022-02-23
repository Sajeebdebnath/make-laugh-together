import React from "react";

const MemeItem = ({ modalOpen, setModalOpen, meme, selectMemeTemplate }) => {
  const { name, url } = meme;
  return (
    <div className="col-lg-3 col-sm-4">
      <div className="single-template" onClick={() => selectMemeTemplate(url)}>
        <button className="use-template">Click Template</button>
        <span className="meme-top-caption">Top Caption</span>
        <img src={url} alt={name} width="100%" height="250px" />
        <span className="meme-bottom-caption">Bottom Caption</span>
      </div>
    </div>
  );
};

export default MemeItem;
