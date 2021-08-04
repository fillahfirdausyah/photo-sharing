import React from "react";

// Component
import Header from "../../Component/Header";
import Cover from "../../Component/Cover";

function PreviewPage({ title }) {
  return (
    <>
      <Header title={title} />
      <Cover />
    </>
  );
}

export default PreviewPage;
