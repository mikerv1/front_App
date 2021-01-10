import React from "react";
import RenderContent from "./marginalia/RenderContent";
import Header from "./Header";
import StickyFooter from "./StickyFooter";

export default function Marginalia() {
  return (
    <>
      <Header />
      <RenderContent />
      <StickyFooter />
    </>
  );
}
