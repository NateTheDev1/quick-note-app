import React from 'react'
import { makeStyles, TextField } from '@material-ui/core'

const useStyles = makeStyles({
    text: {
        marginTop: '3%',
        marginBottom: '5%'
    },
    form: {
        "& .MuiFilledInput-underline:before": {
            borderBottomColor: "black",
          },
    
          "& .MuiFilledInput-underline:after": {
            borderBottomColor: "#00BFA6",
          },

          "& .MuiInput-underline:before": {
            borderBottomColor: "black",
          },

          "& .MuiInput-underline:after": {
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
            }
    }}
})



const NewNote = (props) => {

    const classes = useStyles()

    return (
        <form className={classes.form}>
            <TextField autoFocus placeholder='Top 10 Ways to become famous'
            label="Title"
            fullWidth
            required
            type='text'
            className={classes.text}
            name='title'
            value={props.formValues.title}
            onChange={props.handleChange}
            inputProps={{ maxLength: 50 }} 
            />
            <TextField autoFocus placeholder='1. Get rich.'
            fullWidth
            className={classes.text}
            label="Content"
            multiline
            rows={10}
            required
            type='text'
            name='content'
            value={props.formValues.content}
            onChange={props.handleChange}
            inputProps={{ maxLength: 1000 }} 
            variant='filled'
            />
        </form>
    )
}

export default NewNote