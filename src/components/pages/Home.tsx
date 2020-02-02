import React from 'react';
import Users from '../users/Users';
import Search from '../users/Search';

const Home: React.FC = () => {
  return (
    <>
      <Search />
      <Users />
    </>
  );
};

export default Home;
