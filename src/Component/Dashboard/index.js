import React from "react";

// Asset
import "./style.css";
import Avatar from "../../Assets/avatar9.png";
// import AddIcon from "@material-ui/icons/Add";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";

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
      </div>
    </div>
  );
}

export default Dashboard;
