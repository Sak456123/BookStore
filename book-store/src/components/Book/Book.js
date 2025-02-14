import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Book.css";

const Book = ({ book, onDelete }) => {
  const { _id, name, author, description, price, image } = book; 

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:5000/books/${_id}`);
      onDelete(_id); // ✅ Remove book from UI immediately
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>

      <Button component={Link} to={`/books/${_id}`} sx={{ mt: 'auto' }}>
        Update
      </Button>
      <Button onClick={deleteHandler} sx={{ mt: 'auto' }}>Delete</Button>
    </div>
  );
};

export default Book;
