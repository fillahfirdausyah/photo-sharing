import React, { useRef } from "react";

function AlbumList({ img, label }) {
  const imageRef = useRef();

  const getImageDimension = (e) => {
    const img = imageRef.current.clientWidth;
    console.log(img);
  };

  return (
    <div class="card-album">
      <div className="album">
        <img src={img} alt="..." ref={imageRef} onLoad={getImageDimension} />
        <h5>{label}</h5>
        <p>Created by you</p>
      </div>
    </div>
  );
}

export default AlbumList;
