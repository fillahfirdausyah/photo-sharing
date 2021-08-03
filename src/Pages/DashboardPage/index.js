import React from "react";
import { Container } from "react-bootstrap";

// Component
import Header from "../../Component/Header";
import Album from "../../Component/Album";

function DashboardPage() {
  return (
    <>
      <Header />
      <Container>
        <Album />
      </Container>
    </>
  );
}

export default DashboardPage;
