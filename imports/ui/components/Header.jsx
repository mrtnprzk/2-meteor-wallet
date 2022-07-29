import React from 'react'

const Header = () => {
  return (
    <header className="bg-indigo-600 flex items-center">
      <nav className="max-w-5xl mx-auto p-5">
            <a href="#">
              <img className="h-10 w-auto" src="/images/logo.png" alt="" />
            </a>
      </nav>
    </header>
  );
}

export default Header