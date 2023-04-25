import { Container, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { useAppSelector } from "../../hooks/redux";

const Profile: FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  console.log("user", user);

  return (
    <Container fixed>
      <Grid
        container
        sx={{
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "25px",
        }}
        spacing={2}
      >
        <Grid item>
          <Typography variant="h6">
            Name: {user.name.firstname} {user.name.lastname}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">UserName: {user.username}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">Email: {user.email}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Address: {user.address.city} {user.address.street} -{" "}
            {user.address.number}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">Phone: {user.phone}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
