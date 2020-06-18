import React, { useState } from "react";
import { makeStyles, TextField, Button, Link, Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

import Logo from "../images/Logo.svg";
import { connect } from "react-redux";

import {loginUser} from '../actions/authActions'
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  registerRoot: {
    height: "100vh",
    background: "#36393F",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  left: {
    height: "80%",
    paddingTop: "3%",
    paddingLeft: "5%",
    background: "#202226",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    "& img": {
      width: "30%",
    },
  },
  leftBottom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    height: "50%",
    "& h1": {
      color: "#00BFA6",
      fontWeight: 500,
      fontSize: "5rem",
      marginBottom: "5%",
    },

    "& p": {
      fontWeight: 500,
      fontSize: "1.2rem",
    },
  },
  right: {
    paddingTop: "3%",
    display: "flex",
    flexDirection: "column",
    height: "80%",
    color: "black",
    background: "rgba(255,255,255, 0.7)",
    width: "50%",

    "& form": {
      margin: "0 auto",
      width: "50%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",

      "& h2": {
        fontWeight: 500,
        fontSize: "1.7rem",
      },
      "& .MuiFilledInput-underline:before": {
        borderBottomColor: "black",
      },

      "& .MuiFilledInput-underline:after": {
        borderBottomColor: "#00BFA6",
      },

      "& .MuiInputBase-input": {
        color: "black",
      },

      "& .MuiInputLabel-root": {
        color: "black",
      },

      "& .MuiButton-outlined": {
        background: "#202226",
        color: "#00BFA6",
        fontWeight: 700,
        fontSize: "1rem",
        letterSpacing: 2,
        fontFamily: "Poppins, sans-serif",

        "&:hover": {
          background: "lightgray",
          border: "1px solid #00BFA6",
          color: "#202226",
        },
      },
    },
  },
});

const Login = (props) => {
  const history = useHistory()
  const [snackOpen, setSnackOpen] = useState(false)

  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res =  await props.loginUser(formValues);
    console.log(res)
    if(res === 'Ok') {
      setFormValues({
        email: '',
        password: ''
      })
    } else {
      setSnackOpen(true)
    }
  }

  const handleSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
  };

  const handleChange = e => {
    setFormValues({
      ...formValues, [e.target.name]: e.target.value
    })
  }

  const classes = useStyles();

  if(props.auth === true) {
    setTimeout(() => {
      history.push('/home')
    }, 1000)
  }

  return (
    <div className={classes.registerRoot}>
      {props.error && (
        <Snackbar open={snackOpen} autoHideDuration={3000} onClose={handleSnack} message={props.error}>
          <MuiAlert elevation={6} variant='filled' severity='error' onClose={handleSnack}>{props.error}</MuiAlert>
        </Snackbar>
      )}
      {props.auth && (
        <Snackbar open={true} >
          <MuiAlert elevation={6} variant='filled' severity='success'>Logged In Succesfully!</MuiAlert>
        </Snackbar>
      )}
      <div className={classes.left}>
        <img src={Logo} alt="Quick Notes" />
        <div className={classes.leftBottom}>
          <h1>Get Back To It!</h1>
          <p>Enter a few details and you're ready to go back to QuickNote.</p>
          <Link href="/" style={{ marginTop: "3%" }} underline="hover">
            Go Back
          </Link>
        </div>
      </div>
      <div className={classes.right}>
        <form onSubmit={handleSubmit}>
          <h2>Log In</h2>
          <TextField
          disabled={props.authorizing}
            variant="filled"
            label="Email"
            placeholder="johndoe@email.com"
            required
            type='email'
            name='email'
            value={formValues.email}
            onChange={handleChange}
            inputProps={{ minLength: 5, maxLength: 50 }} 
          />
          <TextField
            type="password"
            variant="filled"
            label="Password"
            required
            name='password'
            value={formValues.password}
            onChange={handleChange}
            placeholder="******"
            inputProps={{ minLength: 6 }} 
            disabled={props.authorizing}
          />
          <Link href="/register" underline="hover">
            Don't Have An Account?
          </Link>
          <Button variant="outlined" type='submit' disabled={props.authorizing}>Login</Button>
        </form>
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    auth: state.authReducer.auth,
    authorizing: state.authReducer.authorizing,
    error: state.authReducer.error,
  }
}



export default connect(mapStateToProps, {loginUser})(Login);
