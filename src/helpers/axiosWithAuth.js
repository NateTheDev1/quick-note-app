import axios from "axios";
import { connect } from "react-redux";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  if (token === null) {
    console.error("Token is invalid and equal to NULL");
    return;
  }

  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};

const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
  };
};

export default connect(mapStateToProps, null)(axiosWithAuth);
