import * as React from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useAppDispatch } from "../../hooks/redux";
import { authSlice } from "../../store/auth/authSlice";

export default function WrongAlertPopUp() {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(authSlice.actions.authFetchingError(""));
  };
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert onClose={handleClose} severity="error">
        Login or password is incorrect
      </Alert>
    </Stack>
  );
}
