import React from "react";
import { Link } from "react-router-dom";

const MainHeader: React.FC = () => {
  return (
    <header className="bg-primary-500 p-4 text-white fixed top-0 w-full h-20 flex items-center">
      <Link to="/">
        <h1 className="text-2xl font-serif">Ticketing System</h1>
      </Link>
    </header>
  );
};

export default MainHeader;
