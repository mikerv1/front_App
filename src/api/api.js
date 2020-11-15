// const api = {
//   post(url = "/login", email, password) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(
//           {
//             token: "1234567890"
//           }
//         );
//       }, 1000);
//     });
//   }
// };

export const apiPost = (email, password) => {
  return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          {
            token: "1234567890",
            role: "admin",
            date: "08.11.2020"
          }
        )
        // reject(
        //   new Error("error!!!!")
        // )
      }, 1000);
  })
}