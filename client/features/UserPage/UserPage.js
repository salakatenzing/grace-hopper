import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePassword } from './userPageSlice';
import { Navigate } from 'react-router-dom';

const EditProfile = () => {
  const dispatch = useDispatch();

  const { firstName, lastName, email, userType } = useSelector(
    (state) => state.auth.me
  );
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      //match the name of the input to the form, populates
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(updatePassword(form));
      <Navigate to="/profile" />;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-5">
      <h2>Edit Profile</h2>
      {userType === 'admin' && (
        <button className="btn btn-primary mb-3">Admin Privileges</button>
      )}
      <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>Email: {email}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="currentPassword" className="form-label">
            Current Password
          </label>
          <input
            type="password"
            className="form-control"
            id="currentPassword"
            name="currentPassword"
            value={form.currentPassword}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
      <br />
      {/* {userType === 'customer' ? (
        <button className="btn btn-primary"> Admin</button>
      ) : (
        <div></div>
      )} */}
    </div>
  );
};

export default EditProfile;
