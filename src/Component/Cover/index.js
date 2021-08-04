import React from "react";
import { Container } from "react-bootstrap";

// Asset
import "./style.css";
import { Architect } from "../../Assets";

function Cover() {
  return (
    <Container>
      <div className="cover text-center">
        <div className="cover-img">
          <img src={Architect} alt="" />
          <p>Architect</p>
          <span>Create by you</span>
        </div>
      </div>
    </Container>
  );
}

export default Cover;
