import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Reading books is the favourite pastime of many people. If you’re bitten by the book-bug too, then there is a massive collection of books for you to read. From bestsellers to new & future releases, the choices are exhaustive when you shop online at India's Largest Bookstore.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header