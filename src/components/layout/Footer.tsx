import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='page-footer font-small bg-dark'>
      <div className='footer-copyright text-center py-1'>
        Copyright © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
