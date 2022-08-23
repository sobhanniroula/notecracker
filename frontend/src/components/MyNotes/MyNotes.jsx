import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import MainScreen from "../MainScreen/MainScreen";

const MyNotes = () => {
  return (
    <MainScreen title="Welcome back">
      <Link to="/createnote">
        <Button
          style={{
            marginLeft: 10,
            marginBottom: 6,
            padding: 10,
            textTransform: "uppercase",
            fontSize: 16,
          }}
          size="lg"
          variant="success"
        >
          Create New Note
        </Button>
      </Link>
    </MainScreen>
  );
};

export default MyNotes;
