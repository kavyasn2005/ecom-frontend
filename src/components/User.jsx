import React from 'react';

const User = ({name,course,age,Email,children}) => {
  return (
    <div>
    <p>App</p>
    <p>{name}</p>
    <p>{course}</p>
    <p>{age}</p>
    <p>{Email}</p>
    {children}
    </div>
  );
};

export default User;