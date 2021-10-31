import { useState, React } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export default function SendTime() {

  return (
    <Button
    component={Link}
    to="/babysitterCabinet"
    color="primary"
    variant="contained"
    autoFocus
  >
    Send time
  </Button>
  )
}