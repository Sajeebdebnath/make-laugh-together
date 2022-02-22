import React, { useEffect, useState } from "react";
import MemeItem from "./MemeItem";
import MemeWorkSation from "./MemeWorkstation";
import MemePagination from "./Pagination";

const MemeTemplates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [memeList, setMemeList] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        setMemeList(memes);
        console.log(memes);
      });
  }, []);

  return (
    <>
      <div className="col-lg-9 col-md-9">
        <div className="meme-template-wrapper">
          <h3 className="text-center text-capitalize mb-3">
            Meme Template here, Use & make meme unlimited
          </h3>
          <div className="meme-templates">
            <div className="row g-0">
              {memeList.map((meme) => (
                <MemeItem
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                  key={meme.id}
                  meme={meme}
                />
              ))}
            </div>
          </div>
          <MemePagination />
        </div>
      </div>
      <MemeWorkSation modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};

export default MemeTemplates;
