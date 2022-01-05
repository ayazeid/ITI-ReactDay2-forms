import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ButtonGroup
      className="m-5"
      variant="outlined"
      aria-label="button group"
      color="info"
    >
      <Button>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          Login
        </Link>
      </Button>
      <Button>
        <Link
          to="/register"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Register
        </Link>
      </Button>
      <Button>
        <Link to="/todo" style={{ color: "inherit", textDecoration: "none" }}>
          ToDo
        </Link>
      </Button>
    </ButtonGroup>
  );
}

export default Nav;
