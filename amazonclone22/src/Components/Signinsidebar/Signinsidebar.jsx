import React from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useNavigate } from "react-router-dom";
import "./Signinsidebar.css";
export default function () {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `./Signin/Signin`;
    navigate(path);
  };
  return (
    <div>
      <AccountCircleRoundedIcon />
      <button className="button" onClick={routeChange}>
        Hello, Sign in
      </button>
    </div>
  );
}
