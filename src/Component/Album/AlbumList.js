import React from "react";

function AlbumList({ img, label }) {
  return (
    <div class="card-album">
      <div className="album">
        <img src={img} alt="..." />
        <h5>{label}</h5>
        <p>Created by you</p>
      </div>
    </div>
  );
}

export default AlbumList;
