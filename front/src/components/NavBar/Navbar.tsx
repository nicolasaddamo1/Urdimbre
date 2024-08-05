import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-violet-100 p-4 shadow-lg w-full">
      <div className="flex justify-between items-center w-full">
        {/* Botones centrados */}
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="text-violet-700 hover:text-violet-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-violet-700 hover:text-violet-900">
                Cursos
              </a>
            </li>
            <li>
              <a href="#" className="text-violet-700 hover:text-violet-900">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-violet-700 hover:text-violet-900">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-violet-700 hover:text-violet-900">
                Sobre Nosotros
              </a>
            </li>
          </ul>
        </div>
        {/* Botones de login y registro a la derecha */}
        <div className="flex space-x-4">
          <button className="bg-green-300 text-violet-700 px-4 py-2 rounded hover:bg-green-400">
            Login
          </button>
          <button className="bg-orange-300 text-violet-700 px-4 py-2 rounded hover:bg-orange-400">
            Registrarse
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
