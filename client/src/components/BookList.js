import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const BookList = (props) => {
  console.log("props.books", props.books)
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.books.map((el, index) => (
            <tr key={index} onClick={() => props.handleClick(index)}>
              <td> {el.title}</td>
              <td> {el.author}</td>
              <td>
                <Button
                  onClick={() => {
                    props.handleEditBook(el);
                  }}
                >
                  Edit
                </Button>
                <Button
                  type="submit"
                  className="btn btn-danger"
                  onClick={() => props.handleDeleteBook(el._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
