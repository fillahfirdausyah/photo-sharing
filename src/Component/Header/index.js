import React from "react";
import { Container } from "react-bootstrap";

// Asset
import "./style.css";
import Avatar from "../../Assets/avatar9.png";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";

function Header() {
  const addAlbums = () => {};

  return (
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
  );
}

export default Header;
