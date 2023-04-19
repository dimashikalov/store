import {
  Alert,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { fetchAuth } from "../../store/auth/authActionCreator";
import { useNavigate } from "react-router-dom";
import WrongAlertPopUp from "../popUps/WrongAuthPopUp";

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginValue, setLoginValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const navigate = useNavigate();
  const { auth, error } = useAppSelector((state) => state.auth);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleLoginForm = () => {
    const authData = {
      username: loginValue,
      password: passwordValue,
    };

    dispatch(fetchAuth(authData));
  };

  if (error) {
    console.log("er", error);
  }
  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth]);

  return (
    <Container fixed>
      <Grid
        container
        sx={{
          height: "90vh",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        spacing={2}
      >
        {error && (
          <Grid item>
            <WrongAlertPopUp />
          </Grid>
        )}
        <Grid item>
          <TextField
            id="outlined-basic"
            label="login"
            variant="outlined"
            sx={{ width: 300 }}
            value={loginValue}
            onChange={(e) => setLoginValue(e.target.value)}
          />
        </Grid>

        <Grid item>
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            sx={{ width: 300 }}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <Button onClick={handleLoginForm}>Login</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
