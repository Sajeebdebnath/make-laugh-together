import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
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
  const [currentImagebase64, setCurrentImagebase64] = useState(null);

  useEffect(() => {
    const loadMemes = async () => {
      setLoading(true);
      const response = await axios.get("https://api.imgflip.com/get_memes");
      const raw = response.data;
      const { memes } = raw.data;
      setMemeList(memes.sort(() => Math.random() - 0.5));
      setLoading(false);
    };

    loadMemes();
  }, []);

  // Convert Image to Data URI for SVG
  function toDataURL(src, callback, outputFormat) {
    let image = new Image();
    image.crossOrigin = "Anonymous";
    image.onload = function () {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      let dataURL;
      canvas.height = this.naturalHeight;
      canvas.width = this.naturalWidth;
      ctx.drawImage(this, 0, 0);
      dataURL = canvas.toDataURL(outputFormat);
      callback(dataURL);
    };
    image.src = src;
    if (image.complete || image.complete === undefined) {
      image.src =
        "data:image/gif;base64, R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      image.src = src;
    }
  }

  function selectMemeTemplate(url) {
    toDataURL(url, function (dataUrl) {
      setCurrentImagebase64(dataUrl);
    });

    setModalOpen(!modalOpen);
    setSelectMeme(url);
  }

  const handleUpload = (event) => {
    event.preventDefault();
    const { files } = event.target;
    const uploadFile = URL.createObjectURL(files[0]);
    setSelectMeme(uploadFile);
    toDataURL(uploadFile, function (dataUrl) {
      setCurrentImagebase64(dataUrl);
    });
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
                <Loader />
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
        handleUpload={handleUpload}
        currentImagebase64={currentImagebase64}
      />
    </>
  );
};

export default MemeTemplates;
