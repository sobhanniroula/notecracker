import React from "react";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import MainScreen from "../MainScreen/MainScreen";
import notes from "../../data/notes.js";

const MyNotes = () => {
  const handleDeleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete the note?")) {
      console.log("Note id to be deleted: ", id);
    }
  };

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

      {notes.map((note) => {
        return (
          <Accordion key={note._id}>
            <Card style={{ marginTop: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <Accordion.Header
                    as={Card.Text}
                    variant="link"
                    eventkey={note._id}
                  >
                    {note.title}
                  </Accordion.Header>
                </span>
                <div>
                  <Button href={`/note/${note._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => handleDeleteNote(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>

              <Accordion.Body eventkey={note._id}>
                <Card.Body>
                  <h6>
                    <Badge variant="secondary">
                      Category - {note.category}
                    </Badge>
                  </h6>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created on {new Date().toLocaleDateString()}
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Body>
            </Card>
          </Accordion>
        );
      })}
    </MainScreen>
  );
};

export default MyNotes;
