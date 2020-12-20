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

export const apiContent = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "Featured post",
            date: "Nov 12",
            description:
              "This is a wider card with supporting text below as a natural lead-in to additional content.",
            image: "https://source.unsplash.com/random",
            imageText: "Image Text",
          },
          {
            id: 2,
            title: "Post title",
            date: "Nov 11",
            description:
              "This is a wider card with supporting text below as a natural lead-in to additional content.",
            image: "https://source.unsplash.com/random",
            imageText: "Image Text",
          },
        ])
        // reject(
        //   new Error("error!!!!")
        // )
      }, 1000);
  })
}

//#################### fro hook useAsync
export const myFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random() * 10
      random <=5
        ? resolve([
          {
            id: 1,
            title: "Featured post",
            date: "Nov 12",
            description:
              "This is a wider card with supporting text below as a natural lead-in to additional content.",
            image: "https://source.unsplash.com/random",
            imageText: "Image Text",
          },
          {
            id: 2,
            title: "Post title",
            date: "Nov 11",
            description:
              "This is a wider card with supporting text below as a natural lead-in to additional content.",
            image: "https://source.unsplash.com/random",
            imageText: "Image Text",
          },
        ])
        : reject('Произошла ошибка')
    }, 2000)
  })
}






// export const stream = {
//   subscribe (channel, listener) {
//     const match = /price-(\d+)/.exec(channel)
//     if (match) {
//       const interval = setInterval(() => {
//         listener({
//           id: parseInt(match[1]),
//           price: Math.round((Math.random() * 10 + 30))
//         })
//       }, 400)
//       return () => clearInterval(interval)
//     }
//   }
// }

// function subscribeToLotPrice (id) {
//   return (dispatch, getState, { stream }) => {
//     return stream.subscribe(`price-${id}`, (data) => {
//       dispatch(changeLotPrice(data.id, data.price))
//     })
//   }
// }

// function LotContainer ({ lot, subscribe }) {
//   React.useEffect(() => {
//     return subscribe(lot.id)
//   }, [lot.id])

//   return <LotConnected lot={lot} />
// }

// const lotContainerMapDispatchToProps = {
//   subscribe: subscribeToLotPrice
// }

// const LotContainerConnected = ReactRedux.connect(null, lotContainerMapDispatchToProps)(LotContainer)

// function changeLotPrice (id, price) {
//   return {
//     type: CHANGE_LOT_PRICE,
//     id,
//     price
//   }
// }

// function auctionReducer (state = auctionInitialState, action) {
//   switch (action.type) {
//     case CHANGE_LOT_PRICE:
//       return {
//         ...state,
//         lots: state.lots.map((lot) => {
//           if (lot.id === action.id) {
//             return {
//               ...lot,
//               price: action.price
//             }
//           }
//           return lot
//         })
//       }
//       default:
//       return state
//   }
// }







