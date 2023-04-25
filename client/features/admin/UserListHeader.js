import React from 'react';

const UserListHeader = () => {
  return (
    <div className="row">
      <div className="col bg-dark-subtle">ID</div>
      <div className="col bg-dark-subtle">First Name</div>
      <div className="col bg-dark-subtle">Last Name</div>
      <div className="col bg-dark-subtle">Email</div>
      <div className="col bg-dark-subtle">User Type</div>
    </div>
  );
};

export default UserListHeader;
