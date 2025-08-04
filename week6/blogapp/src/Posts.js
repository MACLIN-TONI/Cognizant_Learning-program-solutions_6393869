import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) throw new Error('Network error');
        return response.json();
      })
      .then(data => this.setState({ posts: data.slice(0, 10) })) // Show first 10
      .catch(error => this.setState({ error }));
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("An error occurred while rendering posts: " + error.message);
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <p style={{ color: 'red' }}>Error loading posts.</p>;
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
