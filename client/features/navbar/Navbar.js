import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const { userType } = useSelector((state) => state.auth.me);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav
      className="navbar navbar-expand-md navbar-light bg-light"
      aria-label="navbar"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" aria-current="page" to="/">
          <img
            src="/images/Maverick.svg"
            alt="image"
            width="35"
            className="me-2"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbar"
        >
          <ul className="navbar-nav  mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Maverick Merchants
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/products/produce">
                    Produce
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/products/dairy-eggs">
                    Dairy & Eggs
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/products/meat">
                    Meat
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/products/dried-goods">
                    Dried Goods
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/products/beverages">
                    Beverages
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {isLoggedIn ? (
            <div className="d-flex justify-content-between ">
              <Link className="me-5" to="/cart">
                <i className="bi bi-basket  fs-3 text-secondary"></i>
              </Link>
              {userType === 'customer' ? (
                <Link to="/user-page">
                  <i className="bi bi-person-circle fs-3 text"></i>
                </Link>
              ) : (
                <Link to="/admin">
                  <i className="bi bi-person-circle fs-3 text"></i>
                </Link>
              )}
              <div
                className="d-flex align-items-center ms-2 mb-0"
                onClick={logoutAndRedirectHome}
              >
                <a href="" className="mb-0 text-secondary text-decoration-none">
                  logout
                </a>
              </div>
            </div>
          ) : (
            <div className="d-flex align-items-center">
              <Link to="/login">
                <button type="button" className="btn btn-secondary me-1">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button type="button" className="btn btn-primary ms-1">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
