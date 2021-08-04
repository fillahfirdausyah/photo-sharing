import React from "react";
import { Container } from "react-bootstrap";

// Asset
import "./style.css";
import { Avatar } from "../../Assets";

function Seen() {
  return (
    <Container>
      <div className="seen d-flex align-items-center justify-content-between">
        <div className="people">
          <img src={Avatar} alt="" />
        </div>
        <p>3 People</p>
      </div>
    </Container>
  );
}

export default Seen;
