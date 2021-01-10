export const apiUser = (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "1234567890",
        role: "admin",
        date: "08.11.2020",
      });
      // reject(
      //   new Error("error!!!!")
      // )
    }, 1000);
  });
};

export const apiPost = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "Featured post",
        date: "Nov 12",
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        image: "https://source.unsplash.com/random",
        imageText: "Image Text",
      });
      // reject(
      //   new Error("error!!!!")
      // )
    }, 1000);
  });
};

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
      ]);
      // reject(
      //   new Error("error!!!!")
      // )
    }, 1000);
  });
};

//#################### fro hook useAsync
export const myFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random() * 10;
      random <= 5
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
        : reject("Произошла ошибка");
    }, 2000);
  });
};
