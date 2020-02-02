import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title?: string;
  icon?: string;
}

const Navbar: React.FC<Props> = ({
  title = 'Github Finder',
  icon = 'fab fa-github'
}) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {` `}
        {title}
      </h1>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
