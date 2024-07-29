import React from 'react'
import { useState } from 'react';

const Navbar = ({setCategory,setSearch}) => {
    const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    setSearch(searchInput);
    setCategory(''); 
    console.log(searchInput);
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearch(''); 
    setSearchInput(''); 
  };
  return (
      <nav className="navbar navbar-expand-lg  bg-primary py-3 " data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand badge bg-light text-dark fs-4" href="#">NewsForU</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item">
        <a className="nav-link active"  style={{ fontWeight: 'bold', cursor: 'pointer', textDecoration:'underline'  }} onClick={() => handleCategoryClick ("general")}>Home</a>
    </li>
    <li className="nav-item">
        <a className="nav-link active" style={{ fontWeight: 'bold', cursor: 'pointer' ,textDecoration:'underline' }} onClick={() => handleCategoryClick ("business")}>Business</a>
    </li>
    <li className="nav-item">
        <a className="nav-link active" style={{ fontWeight: 'bold', cursor: 'pointer' ,textDecoration:'underline'  }} onClick={() => handleCategoryClick ("technology")}>Technology</a>
    </li>
    <li className="nav-item">
        <a className="nav-link active" style={{ fontWeight: 'bold', cursor: 'pointer' ,textDecoration:'underline'  }} onClick={() => handleCategoryClick ("science")}>Science</a>
    </li>
    <li className="nav-item">
        <a className="nav-link active" style={{ fontWeight: 'bold', cursor: 'pointer' ,textDecoration:'underline' }} onClick={() => handleCategoryClick ("sports")}>Sports</a>
    </li>
    <li className="nav-item">
        <a className="nav-link active" style={{ fontWeight: 'bold', cursor: 'pointer' ,textDecoration:'underline'  }} onClick={() => handleCategoryClick ("entertainment") }>Entertainment</a>
    </li>
</ul>
<form className="d-flex ms-auto px-4" onSubmit={handleFormSubmit} role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchInput}
              onChange={handleInputChange}/>
      <button className="btn btn-outline-success bg-light" type="submit" >Search</button>
    </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
