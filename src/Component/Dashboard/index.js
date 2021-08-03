import React from "react";

// Asset
import "./style.css";
import Avatar from "../../Assets/avatar9.png";
import Travel from "../../Assets/travel.svg";
import Hiking from "../../Assets/hiking.svg";
import Architect from "../../Assets/architect.svg";
import Art from "../../Assets/art.svg";
import Camping from "../../Assets/camping.svg";
import Dogs from "../../Assets/dogs.svg";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";

// Component
import AlbumList from "./AlbumList";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="container">
        <header>
          <div className="profile-picture">
            <img src={Avatar} alt="" />
            <p>Monica</p>
          </div>
          <h2>Albums</h2>
          {/* <button className="btn btn-primary btn-add">
            <AddIcon fontSize="large" className="add-icon" />
          </button> */}
          {/* <button className="btn"> */}
          <AddCircleRoundedIcon fontSize="large" className="add-icon" />
          {/* </button> */}
        </header>
        <div className="content">
          <div className="row">
            <div className="col-4">
              <AlbumList img={Travel} label="Travel" />
            </div>
            <div className="col-4">
              <AlbumList img={Dogs} label="Dogs" />
            </div>
            <div className="col-4">
              <AlbumList img={Hiking} label="Hiking" />
            </div>
            <div className="col-4">
              <AlbumList img={Camping} label="Camping" />
            </div>
            <div className="col-4">
              <AlbumList img={Art} label="Art" />
            </div>
            <div className="col-4">
              <AlbumList img={Architect} label="Architect" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
