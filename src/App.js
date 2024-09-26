import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import AddBookPage from "./pages/AddBookPage";


function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-primary p-4">
          <nav className="container mx-auto flex justify-between">
            <h1 className="text-2xl font-bold">Book Inventory</h1>
            <div>
              <Link to="/" className="mr-4 hover:text-accent">Home</Link>
              <Link to="/books" className="mr-4 hover:text-accent">Books</Link>
              <Link to="/add-book" className="hover:text-accent">Add Book</Link>
            </div>
          </nav>
        </header>

        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/add-book" element={<AddBookPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
