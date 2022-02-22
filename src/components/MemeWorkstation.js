import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const MemeWorkstation = ({ modalOpen, setModalOpen }) => {
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
            <div class="logo-text logo-modal">Make-Laugh-Together</div>
          </ModalHeader>
          <ModalBody>
            <div className="container-fluid">
              <div className="row g-0">
                <div className="col-lg-8">
                  <div className="meme-img">
                    <img
                      src="https://i.imgflip.com/4acd7j.png"
                      alt=""
                      width="100%"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="editable-text mt-5">
                    <form action="">
                      <div className="input-field">
                        <label for="">Use Your Own Meme</label>
                        <input
                          type="file"
                          className="form-control"
                          placeholder="Top Caption"
                        />
                      </div>
                      <div className="input-field">
                        <label for="">Top Text</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Top Caption"
                        />
                      </div>
                      <div className="input-field">
                        <label for="">Bottom Text</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Bottom Caption"
                        />
                      </div>
                      <button className="btn download-btn">
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
