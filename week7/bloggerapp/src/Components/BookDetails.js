import React from 'react';

function BookDetails() {
  const books = ['Clean Code', 'Atomic Habits', 'You Don’t Know JS'];

  return (
    <div>
      <h3>📚 Book List</h3>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
