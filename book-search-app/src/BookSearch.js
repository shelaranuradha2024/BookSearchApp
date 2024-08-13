import React, { useState } from 'react';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value);

    if (e.target.value.length > 0) {
      const response = await fetch(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
      const data = await response.json();
      setBooks(data.docs);
    } else {
      setBooks([]);
    }
  };

  return (
    <div>
      <h1>Book Search</h1>
      <input
        type="text"
        placeholder="Search for a book..."
        value={query}
        onChange={handleSearch}
      />
      <div>
        {books.map((book) => (
          <div key={book.key} style={{ margin: '10px 0' }}>
            <h3>{book.title}</h3>
            <p>{book.author_name && book.author_name.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
