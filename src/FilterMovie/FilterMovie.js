import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "./FilterMovie.css";
import * as Unicons from "@iconscout/react-unicons";
import ReactStars from "react-stars";

const FilterMovie = ({ inputSearch, setInputSearch, newRate, setNewRate }) => {

  const reset = () =>{
    setInputSearch('')
    setNewRate(0)
  }

  return (
    <div className="search">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <Unicons.UilSearch />
        </InputGroup.Text>
        <Form.Control
          placeholder="Search Movie by Title or desc..."
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
      </InputGroup>
      
      <ReactStars 
      size={35} 
      half={false} 
      value={newRate}
      onChange={(rate) => setNewRate(rate)}
      />
      <Button onClick={()=>reset()} variant="light"><Unicons.UilBan />Reset Filter</Button>
    </div>
  );
};

export default FilterMovie;
