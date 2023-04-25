import Button from "@mui/material/Button/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ABOUT_ROUTE } from "../../../utils/consts";

const AboutButton = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate(ABOUT_ROUTE);
  };
  return (
    <Button variant="text" color="inherit" onClick={handleAboutClick}>
      About project
    </Button>
  );
};

export default AboutButton;
