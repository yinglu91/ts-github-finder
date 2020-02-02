import React from 'react';
import spinner from './spinner.gif';

// rafce
const Spinner: React.FC = () => {
  const style = {
    width: '200px',
    margin: 'auto',
    display: 'block'
  };

  return (
    <>
      <img src={spinner} alt='Loading...' style={style} />
    </>
  );
};

export default Spinner;
