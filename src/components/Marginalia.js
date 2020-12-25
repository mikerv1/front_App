import React from "react";
import { PostsProvider } from "../store/marginaliaStore/store";
import RenderContent from "./marginalia/RenderContent";
import Header from "./Header";
import StickyFooter from "./StickyFooter";

export default function Marginalia() {
  
  return (
    <>
      <Header />
        <PostsProvider>
          <RenderContent />
        </PostsProvider>
      <StickyFooter />
    </>
  );
}
