import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../../app/store';
import { Link } from 'react-router-dom';

/**
  The AuthForm component can be used htmlFor Login or Sign Up.
  Props htmlFor Login: name="login", displayName="Login"
  Props htmlFor Sign up: name="signup", displayName="Sign Up"
**/
//The name is the method of the for the server to use, this the method that the slice uses -> Tenzing Salaka
const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    dispatch(authenticate({ email, password, method: formName }));
  };
  const handleNoAccount = () => {
    if (name === 'login') {
      return (
        <p className="text-secondary">
          Don't have an {<Link to="/signup">account</Link>}?
        </p>
      );
    } else {
      return (
        <p className="text-secondary">
          Already have an {<Link to="/login">account</Link>}?
        </p>
      );
    }
  };

  return (
    <div className="card mt-5 mb-5 m-auto p-4" style={{ width: '25rem' }}>
      <form className="text-center" onSubmit={handleSubmit} name={name}>
        <img className="mb-4" src="/images/Maverick.svg" alt="" width="72" />

        <div className="form-floating mb-2">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            name="email"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            name="password"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary mb-3" type="submit">
          {displayName}
        </button>
        {handleNoAccount()}
      </form>
    </div>
  );
};

export default AuthForm;
