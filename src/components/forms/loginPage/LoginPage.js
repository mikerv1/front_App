import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
// import { useAuth } from "./context/auth";
import { Redirect } from "react-router-dom";
import Controls from "../controls/Controls";
import useForm from '../useForm';

import { useDispatch, useSelector } from "react-redux";
import { login } from '../../../store/actions/userActions'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialFValues = {
  email: '',
  password: '',
  isPermanent: false
}

function LoginPage({ location, history }) {
  const classes = useStyles();
  // const [isLoggedIn, setLoggedIn] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const { setAuthTokens } = useAuth();

  // function postLogin() {
  //   const data = {
  //     userName: "a",
  //     password: "p"
  //   }

  //   setAuthTokens(data);
  //   setLoggedIn(true);
  // }

  // if (isLoggedIn) {
  //   return <Redirect to='/blog' />;
  // }
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const {loading, error, userInfo } = userLogin;
console.log('userLogin_1', userLogin)
  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    // if ('fullName' in fieldValues)
    //     temp.fullName = fieldValues.fullName ? "" : "This field is required."
    if ('email' in fieldValues) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      temp.email = re.test(fieldValues.email) ? "" : "Email is not valid."
    }
    if ('password' in fieldValues)
      temp.password = fieldValues.password.length > 9 ? "" : "Minimum 10 numbers required."
    // if ('departmentId' in fieldValues)
    //     temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
    setErrors({
        ...temp
    })

    if (fieldValues == values)
      return Object.values(temp).every(x => x == "")
  }

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFValues, true, validate);

  const handleSubmit = e => {
    e.preventDefault()
    if (validate()){
      console.log('valid')
      // console.log('dispatch: ', dispatch)
      dispatch(login(values.email, values.password))
    }
  }

  // const redirect = location.search
  // ? location.search.split("=")[1]
  // : "/"
  console.log("location", location)
  console.log("history", history)

  useEffect(() => {
      if (userInfo) {
        console.log('userLogin_2', userLogin)
        history.push("/")
      }
    }, [history, userInfo])

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push(redirect)
  //   }
  // }, [history, userInfo, redirect])

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   if (validate()){
  //     console.log('valid')
  //     await dispatch(login(values.email, values.password))
  //   }
  // }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={userName}
            onChange={e => {
              setUserName(e.target.value)
            }}
          /> */}
          {/* Controls.Input */}
          <Controls.Input
            type="text"
            label="Email"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            type="password"
            label="Password"
            name="password"
            autoComplete="password"
            value={values.password}
            onChange={handleInputChange}
            error={errors.password}
          />


          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            // value={password}
            // onChange={e => {
            //   setPassword(e.target.value)
            // }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}

          <Controls.Switch
            name="isPermanent"
            label="Remember me"
            value={values.isPermanent}
            onChange={handleInputChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default LoginPage;