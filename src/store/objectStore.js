const { bool } = require("prop-types");

const state = {
  userLogin: {
    userInfo: "",
    loading: "bool",
    error: "",
  }
}

const user = {
  isLoggedIn: true,
  user: {
    id,
    username: "string",
    email: "string",
    roles: [ROLE_USER,
      ROLE_MODERATOR,
      ROLE_aDMIN],
    accessToken: "string"
  },
  message: {},
  dataChart: {}
}
