import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import InputForm from './InputForm';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const currentUser = localStorage.getItem("user");

    setIsLogin(!token);
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  const checkLogin = () => {
    const token = localStorage.getItem("token");

    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLogin(true);
      setUser(null);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <header>
        <h2>Food Blog</h2>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>

          <li>
            {!isLogin ? (
              <NavLink to="/myRecipe" className={({ isActive }) => isActive ? 'active' : ''}>
                My Recipe
              </NavLink>
            ) : (
              <p onClick={() => setIsOpen(true)}>My Recipe</p>
            )}
          </li>

          <li>
            {!isLogin ? (
              <NavLink to="/favRecipe" className={({ isActive }) => isActive ? 'active' : ''}>
                Favourites
              </NavLink>
            ) : (
              <p onClick={() => setIsOpen(true)}>Favourites</p>
            )}
          </li>

          <li onClick={checkLogin}>
            <p className="login">
              {isLogin ? "Login" : "Logout"}
              {user?.email ? ` (${user.email})` : ""}
            </p>
          </li>
        </ul>
      </header>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <InputForm setIsOpen={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
}
