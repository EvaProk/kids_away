import { React, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

export default function RateBabysitter(props) {
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <Stack
          direction="column"
          spacing={3}
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography color="secondary" variant="h5">
            How was your experience with our babysitter?
          </Typography>
          <Stack direction="row" spacing={10}>
            <Typography color="primary" variant="h6">
              Rate your experiance
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Stack>
          <Stack direction="row" spacing={10}>
            <Typography color="primary" variant="h6">
              Leave a review
            </Typography>
            <TextField
              id="outlined-multiline-static"
              label="Review"
              multiline
              rows={4}
              defaultValue="Your Review"
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </Stack>

          <Button
            variant="contained"
            component={Link}
            to="/"
            style={{ width: "30%" }}
          >
            Submit
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
