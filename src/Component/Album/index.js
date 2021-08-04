import React from "react";
import { Link } from "react-router-dom";

// Asset
import "./style.css";
import { Travel, Hiking, Architect, Art, Camping, Dogs } from "../../Assets";

// Component
import AlbumList from "./AlbumList";

function Album() {
  return (
    <div className="content">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <AlbumList img={Travel} label="Travel" />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Link to="/preview">
            <AlbumList img={Dogs} label="Dogs" />
          </Link>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Link to="/preview">
            <AlbumList img={Hiking} label="Hiking" />
          </Link>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <AlbumList img={Camping} label="Camping" />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <AlbumList img={Art} label="Art" />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <AlbumList img={Architect} label="Architect" />
        </div>
      </div>
    </div>
  );
}

export default Album;
