import React, { useState } from "react";
import "./AddBookForm.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
const AddBookForm = (props) => {
  const [formState, setFormState] = useState({
    title: "",
    author: "",
  });

  // useEffect(() => {
  //   console.log("AddBookForm useEffect");
  //   setFormState(props.book);
  // }, [props.book]);

  const handleChange = (e) => {
    const newState = { ...formState, [e.target.name]: e.target.value };
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    props.submit(formState.title, formState.author);
  };

  return (
    <form className="AddBookForm" onSubmit={handleSubmit}>
      <label className="title">Title</label>
      <input
        type="text"
        name="title"
        value={formState.title}
        onChange={handleChange}
      />
      <label className="author">Author</label>
      <input
        type="text"
        name="author"
        value={formState.author}
        onChange={handleChange}
      />
      <Button type="submit" className="btn btn-success">
        Add New Book
      </Button>
    </form>
  );
};

export default AddBookForm;
