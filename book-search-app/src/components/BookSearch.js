import React, { useState } from 'react';

function BookSearch() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = () => {
    fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
      .then(response => response.json())
      .then(data => {
        setBooks(data.docs);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const addToBookshelf = (book) => {
    let bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    bookshelf.push(book);
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
    alert(`${book.title} has been added to your bookshelf!`);
  };

  return (
    <div className="container">
      <h1>Book Search</h1>
      <div className="search-bar">
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for books" 
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      
      <div className="book-list">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
          </div>
        ))}
      </div>

      <a href="/bookshelf">Go to My Bookshelf</a>
    </div>
  );
}

export default BookSearch;
