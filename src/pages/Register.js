import React, { useState } from "react";
import { makeStyles, TextField, Button, Link } from "@material-ui/core";

import Logo from "../images/Logo.svg";

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

const Register = () => {

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

  const classes = useStyles();
  return (
    <div className={classes.registerRoot}>
      <div className={classes.left}>
        <img src={Logo} alt="Quick Notes" />
        <div className={classes.leftBottom}>
          <h1>Get Started!</h1>
          <p>Enter a few details and you're reading to go QuickNote.</p>
          <Link href="/" style={{ marginTop: "3%" }} underline="hover">
            Go Back
          </Link>
        </div>
      </div>
      <div className={classes.right}>
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <TextField
            variant="filled"
            label="Full Name"
            placeholder="John Doe"
            required
            inputProps={{ minLength: 5, maxLength: 20 }} 
          />
          <TextField
            variant="filled"
            label="Email"
            placeholder="johndoe@email.com"
            required
            type='email'
            inputProps={{ maxLength: 20 }} 
          />
          <TextField
            type="password"
            variant="filled"
            label="Password"
            required
            placeholder="******"
            inputProps={{ minLength: 6 }} 
          />
          <Link href="/login" underline="hover">
            Already Have An Account?
          </Link>
          <Button variant="outlined" type='submit'>Get Started</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
