import React, { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";

// Asset
import "./style.css";
import Avatar from "../../Assets/avatar9.png";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";

function Header() {
  const [showModal, setShowModal] = useState(false);

  const addAlbums = () => {
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Album</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <form action="">
              <div class="mb-2">
                <label for="AlbumName" class="form-label">
                  Album Name
                </label>
                <input type="text" class="form-control" id="AlbumName" />
              </div>
              <div class="mb-4">
                <label for="Album Cover" class="form-label">
                  Password
                </label>
                <input type="file" class="form-control" id="Album Cover" />
                <div id="emailHelp" class="form-text">
                  we recommend an image size of 400 x 600
                </div>
              </div>
              <button class="btn btn-primary w-100">
                Save
              </button>
            </form>
          </Container>
        </Modal.Body>
      </Modal>

      <div className="header">
        <Container>
          <header>
            <div className="profile-picture">
              <img src={Avatar} alt="" />
              <p>Monica</p>
            </div>
            <h2>Albums</h2>
            <button className="btn shadow-none" onClick={addAlbums}>
              <AddCircleRoundedIcon fontSize="large" className="add-icon" />
            </button>
          </header>
        </Container>
      </div>
    </>
  );
}

export default Header;
