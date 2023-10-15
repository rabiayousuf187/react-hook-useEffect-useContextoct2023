import React, { useContext } from 'react';
import { UserContext } from '../App';

function User() {
  const user = useContext(UserContext);
  console.log(UserContext)

  return (
    <>
      <h1>User component</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default User;