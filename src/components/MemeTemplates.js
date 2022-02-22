import axios from "axios";
import React, { useEffect, useState } from "react";
import MemeItem from "./MemeItem";
import MemeWorkSation from "./MemeWorkstation";
import MemePagination from "./Pagination";

const MemeTemplates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [memeList, setMemeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageMemeLimit = 8;
  const [selectMeme, setSelectMeme] = useState("");

  useEffect(() => {
    const loadMemes = async () => {
      setLoading(true);
      const response = await axios.get("https://api.imgflip.com/get_memes");
      const raw = response.data;
      const { memes } = raw.data;
      setMemeList(memes);

      setLoading(false);
    };

    loadMemes();
  }, []);

  const selectMemeTemplate = (url) => {
    setSelectMeme(url);
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div className="col-lg-9 col-md-9">
        <div className="meme-template-wrapper">
          <h3 className="text-center text-capitalize mb-3">
            Meme Template here, Use & make meme unlimited
          </h3>
          <div className="meme-templates">
            <div className="row g-0">
              {loading ? (
                "Loading"
              ) : (
                <>
                  {memeList
                    .slice(
                      (currentPage - 1) * pageMemeLimit,
                      currentPage * pageMemeLimit
                    )
                    .map((meme) => (
                      <MemeItem
                        modalOpen={modalOpen}
                        setModalOpen={setModalOpen}
                        key={meme.id}
                        meme={meme}
                        selectMemeTemplate={selectMemeTemplate}
                      />
                    ))}
                </>
              )}
            </div>
          </div>
          <MemePagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            memeList={memeList}
            pageMemeLimit={pageMemeLimit}
            loading={loading}
          />
        </div>
      </div>
      <MemeWorkSation
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        selectMeme={selectMeme}
      />
    </>
  );
};

export default MemeTemplates;
