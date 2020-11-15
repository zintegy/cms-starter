import React from 'react';
import { NavLink } from 'react-router-dom';

const ShowBlog = () => {
  return <div>
    <span>This is a blog.</span>
    <NavLink 
      to="/admin"
      activeClassName="selected">
      Admin
    </NavLink>
  </div>;
}

export default ShowBlog;


