import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import "./RegisterPage.css";
import ErrorMessage from "../ErrorMessage";
import Loading from "../Loading";
import MainScreen from "../MainScreen/MainScreen";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!!");
    } else {
      console.log("handle submit: ", e.target.value);
      console.log(name, email, password, confirmPassword, pic);
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        setLoading(true);

        const { data } = await axios.post(
          "/api/users",
          { name, pic, email, password },
          config
        );

        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  // const postPics = (pics) => {
  //   if (!pics) {
  //     return setPicMessage("Please select an image");
  //   }
  //   setPicMessage(null);

  //   if (pics.type === "image/jpeg" || pics.type === "image/png") {
  //     console.log(process.env.CLOUDINARY_URL);
  //     const data = new FormData();
  //     data.append("file", pics);
  //     data.append("upload_preset", "notecracker");
  //     data.append("cloud_name", "dvunony7t");
  //     fetch("https:/res.cloudinary.com/dvunony7t/image/upload", {
  //       // fetch("process.env.CLOUDINARY_URL/image/upload", {
  //       method: "post",
  //       body: data,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setPic(data.url.toString());
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     return setPicMessage("Please select an image");
  //   }
  // };

  return (
    <MainScreen title="Signup">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              placeholder="Re-enter password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          {picMessage && (
            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
          )}
          <Form.Group controlId="pic">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              // onChange={(e) => postPics(e.target.files[0])}
              // id="custom-file"
              type="file"
              label="Upload Profile Picture"
              // custom
            />
          </Form.Group>

          <Button id="register-submit-button" variant="success" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </MainScreen>
  );
};

export default RegisterPage;
