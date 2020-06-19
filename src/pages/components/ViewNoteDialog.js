import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

const ViewNoteDialog = ({ focusedNote, viewOpen, setViewOpen }) => {
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
            <Button>Edit</Button>
            <Button>Delete</Button>
            <Button onClick={() => setViewOpen(!viewOpen)}>Close</Button>
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
