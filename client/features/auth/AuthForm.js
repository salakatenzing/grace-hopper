// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { authenticate } from '../../app/store';

// /**
//   The AuthForm component can be used for Login or Sign Up.
//   Props for Login: name="login", displayName="Login"
//   Props for Sign up: name="signup", displayName="Sign Up"
// **/

// const AuthForm = ({ name, displayName }) => {
//     const { error } = useSelector((state) => state.auth);
//     const dispatch = useDispatch();

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         const formName = evt.target.name;
//         const username = evt.target.username.value;
//         const password = evt.target.password.value;
//         dispatch(authenticate({ username, password, method: formName }));
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit} name={name}>
//                 <div class="mb-3">
//                     <label htmlFor="username" class="form-label">
//                         Username
//                     </label>
//                     <input
//                         type="text"
//                         class="form-control"
//                         id="username"
//                         name="username"
//                     />
//                 </div>
//                 <div class="mb-3">
//                     <label htmlFor="password" class="form-label">
//                         Password
//                     </label>
//                     <input
//                         type="password"
//                         class="form-control"
//                         id="password"
//                         name="password"
//                     />
//                 </div>
//                 <div>
//                     <button type="submit" class="btn btn-primary">
//                         {displayName}
//                     </button>
//                 </div>
//                 {error && <div> {error} </div>}
//             </form>
//         </div>
//     );
// };

// export default AuthForm;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../../app/store';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate({ username, password, method: formName }));
  };
  const handleNoAccount = () => {
    if (name === 'login') {
      return (
        <>
          <h3>Don't have an account?</h3>
          <Link to="/signup">
            <button type="submit" className="btn btn-primary rounded-pill">
              Signup
            </button>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <h3>Already have an account?</h3>
          <Link to="/login">
            <button type="submit" className="btn btn-primary rounded-pill">
              Login
            </button>
          </Link>
        </>
      );
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form
            className="p-4 rounded .bg-secondary.bg-gradient"
            onSubmit={handleSubmit}
            name={name}
          >
            <div className="form-group d-flex justify-content-between">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control rounded-pill"
                id="username"
                name="username"
              />
            </div>
            <div className="form-group d-flex justify-content-between">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control rounded-pill"
                id="password"
                name="password"
              />
            </div>
            <div className="d-flex justify-content-center flex-column align-items-center w-100">
              <button
                type="submit"
                className="btn btn-primary rounded-pill my-3"
              >
                {displayName}
              </button>
              <div></div>
              {handleNoAccount()}
            </div>
            {error && <div className="mt-3 text-danger">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
