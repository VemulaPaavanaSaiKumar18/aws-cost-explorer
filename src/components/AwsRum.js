import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

export const AwsRum = () => {
  const onEvent = () => {
    ReactGA.event({
      category: "User",
      action: "Created an Account",
    });
    alert("clicked");
  };
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <div>
      <p>awsRum</p>
      <Link to={"/"}>Back</Link>
      <Button variant="contained" onClick={onEvent}>
        Google Analytics
      </Button>
    </div>
  );
};
