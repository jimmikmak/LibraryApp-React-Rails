import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const EditBookForm = (props) => {
  const [formState, setFormState] = useState({
    _id: "",
    title: "",
    author: "",
  });

    useEffect(() => {
      console.log("EditBookForm useEffect");
      setFormState(props.currentBook);
    }, [props.currentBook]);

  const handleChange = (e) => {
    const newState = { ...formState, [e.target.name]: e.target.value };
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    props.updateBook(formState);
  };

  return (
    <div>
      <form className="edit-book-form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={handleChange}
        />
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={formState.author}
          onChange={handleChange}
        />
        <Button type="submit" className="btn btn-success">
          Update Book
        </Button>
        <Button
          onClick={() => props.setEditing(false)}
          className="btn btn-danger"
        >
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default EditBookForm;
