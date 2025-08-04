import React from 'react';

function BlogDetails() {
  const blogs = [
    { title: 'React Basics', author: 'Alice' },
    { title: 'Advanced JS', author: 'Bob' }
  ];

  return (
    <div>
      <h3>📝 Blog Posts</h3>
      <ul>
        {blogs.map((b, i) => (
          <li key={i}>
            <strong>{b.title}</strong> by {b.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
