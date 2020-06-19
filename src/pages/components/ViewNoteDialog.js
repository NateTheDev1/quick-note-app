import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  danger: {
    color: "white",
    backgroundColor: "#FF8800",
    transition: "ease 0.5s",

    "&:hover": {
      backgroundColor: "#CC0000",
    },
  },
  edit: {
    color: "white",
    backgroundColor: "#0099CC",
    transition: "ease 0.5s",

    "&:hover": {
      backgroundColor: "#33b5e5",
    },
  },
  close: {
    color: "white",
    backgroundColor: "#37474F",

    "&:hover": {
      backgroundColor: "#3E4551",
    },
  },
});

const ViewNoteDialog = ({
  focusedNote,
  viewOpen,
  setViewOpen,
  handleDelete,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      open={viewOpen}
      onClose={() => setViewOpen(!viewOpen)}
      aria-labelledby="New Note"
      fullWidth
      maxWidth="md"
    >
      {focusedNote === null ? (
        <p>Error Loading Content</p>
      ) : (
        <>
          <DialogTitle style={{ fontWeight: 500, fontSize: "1.5rem" }}>
            {focusedNote.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>{focusedNote.createdAt}</DialogContentText>
            <p style={{ lineHeight: 2 }}>{focusedNote.content}</p>
          </DialogContent>
          <DialogActions>
            <Button className={classes.edit}>Edit</Button>
            <Button
              className={classes.danger}
              onClick={() => handleDelete(focusedNote._id)}
            >
              Delete
            </Button>
            <Button
              onClick={() => setViewOpen(!viewOpen)}
              className={classes.close}
            >
              Close
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

ViewNoteDialog.defaultProps = {
  focusedNote: {
    title: "",
    content: "",
    createdAt: "",
  },
};

export default ViewNoteDialog;
