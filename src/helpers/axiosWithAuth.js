import axios from 'axios'
import { connect } from 'react-redux';

const axiosWithAuth = ({token}) => {
    if(token === null) {
        console.error('Token is invalid and equal to NULL')
        return;
    }

    return axios.create({
        headers: {
            Authorization: token
        }
    })
}

const mapStateToProps = (state) => {
    return {
        token: state.authReducer.token
    }
}

export default connect(mapStateToProps, null)(axiosWithAuth);