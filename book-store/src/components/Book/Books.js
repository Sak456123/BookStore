import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import "./Book.css"; // Ensure this is imported

const URL = "http://localhost:5000/books"; // Ensure the backend is running

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books)); // Ensure API returns `books`
  }, []);

  // ✅ Function to remove deleted book from state
  const handleDelete = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
  };

  return (
    <div className="books-container">
      <ul>
        {books && books.length > 0 ? (
          books.map((book) => (
            <li key={book._id} className="card">
              <Book book={book} onDelete={handleDelete} /> {/* ✅ Pass onDelete */}
            </li>
          ))
        ) : (
          <p>No books available</p>
        )}
      </ul>
    </div>
  );
};

export default Books;
