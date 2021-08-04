import React from "react";
import { Container } from "react-bootstrap";

// Component
import Header from "../../Component/Header";
import Album from "../../Component/Album";

function DashboardPage({ title }) {
  return (
    <>
      <Header title={title} />
      <Container>
        <Album />
      </Container>
    </>
  );
}

export default DashboardPage;
