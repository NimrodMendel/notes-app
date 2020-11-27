import React from "react";
import "./Modal.css";
import { Modal, Button, TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function MyModal(props) {
  const title = props.title;
  const text = props.text;
  const open = props.open;
  const handleClose = props.handleClose;
  const classes = useStyles();
  return (
    <Container maxWidth="ref" className="modal">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        onClose={handleClose}
        className={classes.modal}
      >
        <Fade in={open}>
          <Fade in={open}>
            <div className={classes.paper}>
              <Grid container justify="center" className="form-container" row>
                <TextField
                  onInput={props.onUpdateTitle}
                  label="Title"
                  defaultValue={title}
                  fullWidth
                  variant="outlined"
                ></TextField>
              </Grid>
              <Grid container justify="center" className="form-container" row>
                <TextField
                  onInput={props.onUpdateText}
                  defaultValue={text}
                  className="text-area"
                  placeholder="Write your note..."
                  label="Note Text"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={5}
                />
              </Grid>
              <Grid className="button-container">
                <Grid item>
                  <Button
                    variant="contained"
                    startIcon={<SaveIcon />}
                    onClick={() => props.handleSubmitUpdate()}
                  >
                    Save
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={handleClose}
                    color="primary"
                    startIcon={<CancelIcon />}
                  >
                    Close
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Fade>
        </Fade>
      </Modal>
    </Container>
  );
}
export default MyModal;
