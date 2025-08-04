import React from 'react';

function CourseDetails() {
  const courses = ['React', 'Node.js', 'MongoDB'];

  return (
    <div>
      <h3>🎓 Courses Available</h3>
      <ol>
        {courses.map((course, i) => (
          <li key={i}>{course}</li>
        ))}
      </ol>
    </div>
  );
}

export default CourseDetails;
