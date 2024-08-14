import React, { useState, useEffect } from 'react';

function Bookshelf() {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return (
    <div className="container">
      <h1>My Bookshelf</h1>
      {bookshelf.length === 0 ? (
        <p>Your bookshelf is empty.</p>
      ) : (
        <ul className="bookshelf-list">
          {bookshelf.map((book, index) => (
            <li key={index}>{book.title}</li>
          ))}
        </ul>
      )}
      <a href="/">Back to Search</a>
    </div>
  );
}

export default Bookshelf;
