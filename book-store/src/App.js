import React from "react"; // ✅ Import React
import { Routes, Route } from "react-router-dom"; // ✅ Import Route
import Header from "./components/Header";
import Home from "./components/Home"; // ✅ Ensure Home component exists
import AddBook from "./components/AddBook"; // ✅ Import AddBook
import Books from "./components/Book/Books"; // ✅ Import Books
import About from "./components/About"; // ✅ Import About
import BookDetail from "./components/Book/BookDetail";  // ✅ Adjust the path if needed

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/books/:id" element={<BookDetail/>} exact/>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
