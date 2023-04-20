import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <h1>FS-App-Template</h1>
      <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
        {isLoggedIn ? (
          <div className="container-fluid">
            {/* The navbar will show these links after you log in */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <div className="row w-100">
                <div className="col-md-4">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                    <li className="nav-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <button className="btn btn-body-tertiary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Products
                      </button>
                      <ul className="dropdown-menu dropdown-menu-body-tertiary">
                        <li className="dropdown-item">
                          <Link to="/products/produce">Produce</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link to="/products/meat">Meat</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link to="/products/dairy&eggs">Dairy & Eggs</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link to="/products/beverages">Beverages</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link to="/products/driedgoods">Dried Goods</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                  <form className="d-flex align-items-center search-form" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  </form>
                </div>
                <div className="col-md-4 d-flex justify-content-end">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/cart">Cart</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/signup">Sign up</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
