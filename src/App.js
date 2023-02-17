import React from "react";

const Blog = (props) => {
  // membaca var data yang berasal dari index
  const dataPost = props.data;
  // kemudian dataPost akan dilakukan iterasi array menggunakan map, karena mengembalikan array untuk dirender pada index
  const listPost = dataPost.map((b) => (
    <div className="ui feed">
      <div className="event">
        <div className="label">
          <img src={b.image} alt="user-avatar" />
        </div>
        <div className="content">
          <div className="date">{b.createdAt}</div>
          <div className="summary">
            <a href="/">{b.name}</a> created a post
          </div>
          <div className="text extra">{b.post}</div>
        </div>
      </div>
    </div>
  ));
  return listPost;
};

export default Blog;
