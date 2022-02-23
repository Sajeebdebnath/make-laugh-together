import React, { useState } from "react";
import Draggable from "react-draggable";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import saveSvgAsPng from "save-svg-as-png";

const MemeWorkstation = ({
  modalOpen,
  setModalOpen,
  selectMeme,
  handleUpload,
  currentImagebase64,
}) => {
  const initialState = {
    topY: "10%",
    topX: "50%",
    centerY: "50%",
    centerX: "50%",
    bottomX: "50%",
    bottomY: "90%",
  };
  const [texts, setTexts] = useState({
    topText: "",
    centerText: "",
    bottomText: "",
  });
  const [imageWidth, setImageWidth] = useState();
  const [imageHeigth, setImageHeigth] = useState();
  function getMeta(url, callback) {
    var img = new Image();
    img.src = url;
    img.onload = function () {
      callback(this.width, this.height);
    };
  }
  getMeta(selectMeme, function (width, height) {
    setImageHeigth(height);
    setImageWidth(width);
  });

  var wrh = imageWidth / imageHeigth;
  var newWidth = 460;
  var newHeight = newWidth / wrh;

  const [textColor, setTextColor] = useState("#ffffff");
  const textStyle = {
    fontFamily: "captionFont",
    fontSize: "30px",
    textTransform: "capitalize",
    fill: textColor,
    stroke: "#000",
    userSelect: "none",
  };
  const changeText = (event) => {
    event.preventDefault();
    setTexts({
      ...texts,
      [event.target.name]: [event.target.value],
    });
  };

  const changeTextColor = (event) => {
    event.preventDefault();
    setTextColor(event.target.value);
  };

  const downloadImage = (e) => {
    e.preventDefault();
    saveSvgAsPng.saveSvgAsPng(
      document.getElementById("svg-wrapper"),
      "meme.png"
    );
  };

  return (
    <>
      <div>
        <Modal
          fullscreen="lg"
          size="lg"
          toggle={() => setModalOpen(!modalOpen)}
          isOpen={modalOpen}
        >
          <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
            <div className="logo-text logo-modal">Make-Laugh-Together</div>
          </ModalHeader>
          <ModalBody>
            <div className="container-fluid">
              <div className="row g-0 d-flex align-items-center">
                <div className="col-lg-8 col-md-7">
                  <div className="meme-img">
                    <svg
                      width={newWidth}
                      height={newHeight}
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnshlink="http://www.w3.org/1999/xlink"
                      id="svg-wrapper"
                    >
                      <image
                        xlinkHref={currentImagebase64}
                        height={newHeight}
                        width={newWidth}
                      />
                      <Draggable>
                        <text
                          style={textStyle}
                          x={initialState.topX}
                          y={initialState.topY}
                          dominantBaseline="middle"
                          textAnchor="middle"
                        >
                          {texts.topText}
                        </text>
                      </Draggable>
                      <Draggable>
                        <text
                          style={textStyle}
                          x={initialState.centerX}
                          y={initialState.centerX}
                          dominantBaseline="middle"
                          textAnchor="middle"
                        >
                          {texts.centerText}
                        </text>
                      </Draggable>

                      <Draggable>
                        <text
                          style={textStyle}
                          dominantBaseline="middle"
                          textAnchor="middle"
                          x={initialState.bottomX}
                          y={initialState.bottomY}
                        >
                          {texts.bottomText}
                        </text>
                      </Draggable>
                    </svg>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5">
                  <div className="editable-text mt-3">
                    <form action="">
                      <div className="input-field">
                        <label for="">Use Your Own Meme (optional)</label>
                        <input
                          type="file"
                          className="form-control"
                          placeholder="Top Caption"
                          accept="image/x-png,image/gif,image/jpeg"
                          onChange={handleUpload}
                        />
                      </div>
                      <div className="input-field">
                        <label for="favcolor">Change Text Color</label>
                        <input
                          type="color"
                          id="favcolor"
                          className="form-control"
                          name="textColor"
                          value={textColor}
                          onChange={(event) => changeTextColor(event)}
                        />
                      </div>
                      <div className="input-field">
                        <label for="">Top Text</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Top Caption"
                          name="topText"
                          value={texts.topText}
                          onChange={(event) => changeText(event)}
                        />
                      </div>
                      <div className="input-field">
                        <label for="">Center Text (optional)</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Center Caption"
                          name="centerText"
                          value={texts.centerText}
                          onChange={(event) => changeText(event)}
                        />
                      </div>
                      <div className="input-field">
                        <label for="">Bottom Text</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Bottom Caption"
                          name="bottomText"
                          value={texts.bottomText}
                          onChange={(event) => changeText(event)}
                        />
                      </div>
                      <button
                        className="btn download-btn"
                        onClick={downloadImage}
                      >
                        Download Meme
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

export default MemeWorkstation;
