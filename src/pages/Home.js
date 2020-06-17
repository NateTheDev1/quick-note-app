import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../images/Logo.svg";
import PersonWithNotes from "../images/PersonWithNotes.svg";
import LocalCafeOutlinedIcon from "@material-ui/icons/LocalCafeOutlined";

import { TweenMax, Power3 } from "gsap";

const useStyles = makeStyles({
  landingContainer: {
    minHeight: "100vh",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    background: "#36393F",

    "& h1": {
      color: "#00BFA6",
      fontWeight: 700,
      fontSize: "3rem",
    },

    "& footer": {
      marginTop: "3%",
      justifySelf: "flex-end",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "100%",
      height: "50px",
      color: "white",
      textAlign: "center",
      background: "#00BFA6",

      "& a": {
        color: "white",
      },

      "@media (max-width: 800px)": {
        flexDirection: "column",
      },
    },
  },

  landingContent: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",

    "& img": {
      width: "40%",
      opacity: 0,
    },

    "@media (max-width: 800px)": {
      flexDirection: "column-reverse",
      textAlign: "center",
      "& img": {
        marginTop: "5%",
        marginBottom: "5%",
      },
    },
  },
  contentLeft: {
    display: "flex",
    flexDirection: "column",
    width: "40%",

    "& p": {
      fontSize: "1.2rem",
      color: "white",
      lineHeight: 2,
      marginTop: "5%",
      marginBottom: "5%",
    },

    "@media (max-width: 800px)": {
      width: "100%",
    },
  },
  navLinks: {
    display: "flex",
    flexDirection: "column",

    width: "100%",

    "& a": {
      width: "200px",
      marginRight: "5%",
      marginBottom: "4%",

      "@media (max-width: 800px)": {
        margin: "0 auto",
      },
    },

    "& button": {
      width: "100%",
      border: "1px solid white",
      background: "none",
      color: "white",
      height: "50px",
      transition: "ease-in 0.2s",
      fontSize: "1.2rem",
      fontWeight: 700,

      "&:hover": {
        cursor: "pointer",
        background: "#00BFA6",
        border: "none",
        width: "150%",
      },
    },
  },
  patreon: {
    textDecoration: "none",
    width: "200px",
    marginRight: "5%",
    marginBottom: "4%",

    "@media (max-width: 800px)": {
      margin: "0 auto",
    },

    "& button": {
      width: "100%",
      border: "1px solid #F96854",
      background: "none",
      color: "white",
      height: "50px",
      transition: "ease-in 0.2s",
      fontSize: "1.2rem",
      fontWeight: 700,

      "&:hover": {
        cursor: "pointer",
        background: "#F96854",

        border: "none",
        width: "150%",
      },
    },
  },
});

const Home = () => {
  const classes = useStyles();

  let logoItem = useRef(null);
  let headerText = useRef(null);

  useEffect(() => {
    TweenMax.to(logoItem, 0.8, {
      opacity: 1,
      y: 20,
      ease: Power3.easeIn,
    });
    TweenMax.to(logoItem, 0.8, {
      x: 40,
      ease: Power3.easeIn,
    });

    TweenMax.from(headerText, 0.8, {
      opacity: 0,
      ease: Power3.easeIn,
    });
  }, []);

  return (
    <div className={classes.landingContainer}>
      <img src={Logo} alt="Quick Notes" />
      <div className={classes.landingContent}>
        <div className={classes.contentLeft}>
          <h1
            ref={(el) => {
              headerText = el;
            }}
          >
            Take notes easily with QuickNote.
          </h1>
          <p>
            QuickNote is a quick and easy solution to the many note taking
            applications you are currently signed up for. Here you just need to
            sign up, login and start creating simple notes to display on your
            board.
          </p>
          <div className={classes.navLinks}>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Sign Up</button>
            </Link>
            <Link to="#" className={classes.patreon}>
              <button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Buy Me A Coffee <LocalCafeOutlinedIcon />
              </button>
            </Link>
          </div>
        </div>
        <img
          src={PersonWithNotes}
          alt="Person taking notes"
          ref={(el) => {
            logoItem = el;
          }}
        />
      </div>
      <footer>
        <p>Nathaniel Richards 2020</p>
        <a href="https://nathanielrichards.dev" target="_none">
          https://nathanielrichards.dev
        </a>
      </footer>
    </div>
  );
};

export default Home;
