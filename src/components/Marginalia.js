import React, { useEffect } from "react";
import { PostsProvider, usePostsStore } from "../store/marginaliaStore/store";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { CssBaseline } from "@material-ui/core";
import { load } from "../store/marginaliaStore/actions";
import { useAsync } from "./marginalia/useAsync"
import { apiContent } from "../api/api"
import { myFunction } from "../api/api"
import Warning from "./marginalia/Warning"
import RenderContent from "./marginalia/RenderContent"
import Header from "./Header";
import StickyFooter from "./StickyFooter"

// export default function Marginalia() {
//   const [execute, status, value, error] = useAsync(apiContent)
//   console.log(value)
//   if (error) {
//     return (<Warning />)
//   } else if (value) {
//     return (<Content value = { value } />)
//   }
// }
//   return (
//     <>
//       <PostsProvider>
//         <Content />
//       </PostsProvider>
//     </>
//   );
// }

export default function Marginalia() {  

  // const [execute, status, value, error] = useAsync(apiContent)

  // console.log("status_start", status);
  // console.log("value", value);
  // console.log("error", error);
  
  // if (error) {
  //   return (<Warning />)
  // } 

  // console.log("status_start", status);
  // console.log("value", value);
  // console.log("error", error);

  return (
    <>
      <PostsProvider >
        <Header />
          <RenderContent />
        <StickyFooter />
      </PostsProvider>
    </>
  )
}

