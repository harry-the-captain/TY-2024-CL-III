import React from 'react';

const Header = ({ data }) => {
  return (
    <div className='flex items-start justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello, <br />
        <span className='text-3xl font-semibold'>
          {data && data.firstName ? data.firstName : 'Admin'} 👋
        </span>
      </h1>
      <button className='bg-red-700 py-2 px-5 rounded-2xl'>Log Out</button>
    </div>
  );
};

export default Header;