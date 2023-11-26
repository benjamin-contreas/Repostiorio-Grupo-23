import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <nav className="flex justify-center">
          <Link
            to="/fake-store-react"
            className="text-gray-300 hover:text-white mx-4"
          >
            Home
          </Link>
          <Link
            to="fake-store-react/about"
            className="text-gray-300 hover:text-white mx-4"
          >
            About
          </Link>
          <Link
            to="fake-store-react/contact"
            className="text-gray-300 hover:text-white mx-4"
          >
            Contact
          </Link>
          <a
            href="https://github.com/benjamin-contreas/Repostiorio-Grupo-23/tree/main/Proyecto/fake-store-react"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white mx-4"
          >
            <FaGithub className="inline-block mr-1" />
            GitHub
          </a>
        </nav>
        <p>&copy; 2023 My Awesome Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
