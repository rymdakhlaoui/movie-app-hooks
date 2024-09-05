import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./AddMovie.css";
import * as Unicons from "@iconscout/react-unicons";

function AddMovie({ add }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Initialisation
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0);
  const [posterUrl, setPosterUrl] = useState("");

  //Update
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleRate = (e) => {
    setRate(e.target.value);
  };

  const handlePoster = (e) => {
    setPosterUrl(e.target.value);
  };


  const handleAdd = () =>{
const newMovie= {title, description, rate, posterUrl}
    add(newMovie)
    handleClose()
  }

  return (
    <div className="AddMovie">
      <Button variant="primary" onClick={handleShow}>
      <Unicons.UilPlusCircle />
        Add new Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control onChange={(e)=>handleTitle(e)} type="text" placeholder="Movie Title" autoFocus />

              <Form.Label>Description</Form.Label>
              <Form.Control onChange={(e)=>handleDescription(e)} type="text" placeholder="Description" autoFocus />

              <Form.Label>Movie Rate</Form.Label>
              <Form.Control onChange={(e)=>handleRate(e)} max={5} type="number" placeholder="Movie rate" autoFocus />

              <Form.Label>Movie PosterUrl</Form.Label>
              <Form.Control onChange={(e)=>handlePoster(e)} type="text" placeholder="Poster Url" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={()=>handleAdd()} variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddMovie;
