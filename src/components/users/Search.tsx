import React, { useState, useContext } from 'react';

import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
import { GithubContextProps } from '../../context/github/types';
import { AlertContextProps } from '../../context/alert/types';

// rafce -- React Arrow Function Component with export default at the End
const Search: React.FC = () => {
  const githubContext = useContext<GithubContextProps>(GithubContext);

  const { users, clearUsers, searchUsers } = githubContext;

  const alertContext = useContext<AlertContextProps>(AlertContext);
  const { setAlert } = alertContext;

  const [text, setText] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>

      {users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={() => clearUsers()}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
