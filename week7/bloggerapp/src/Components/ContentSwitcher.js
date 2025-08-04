import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function ContentSwitcher() {
  const [content, setContent] = useState('book');

  const renderContent = () => {
    switch (content) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return <p>Select a content type</p>;
    }
  };

  return (
    <div>
      <h2>📂 Content Switcher</h2>
      <button onClick={() => setContent('book')}>Books</button>
      <button onClick={() => setContent('blog')}>Blogs</button>
      <button onClick={() => setContent('course')}>Courses</button>
      <hr />
      {renderContent()}
    </div>
  );
}

export default ContentSwitcher;
