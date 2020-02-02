import React, { useReducer } from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer';

import { User } from './types';

import { GithubActionTypes, GithubReducerState } from './types';

// let githubClientId;
// let githubClientSecret;

// if (process.env.NODE_ENV !== 'production') {
//   githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
//   githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
// } else {
//   githubClientId = process.env.GITHUB_CLIENT_ID;
//   githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
// }

interface Props {
  children: React.ReactNode;
}

const GithubState: React.ComponentType<Props> = props => {
  const initailState: GithubReducerState = {
    users: [],
    user: {} as User,
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(githubReducer, initailState);

  // Search Users
  const searchUsers = async (text: string): Promise<void> => {
    setLoading();

    // using proxy in package.json

    // https://api.github.com/search/users?q=brad
    const res = await axios.get(`/search/users?q=${text}`);

    dispatch({
      type: GithubActionTypes.searchUsers,
      payload: res.data.items
    });
  };

  // Get user
  const getUser = async (username: string): Promise<void> => {
    setLoading();

    // https://api.github.com/users/bradtraversy
    const res = await axios.get(`/users/${username}`);

    dispatch({
      type: GithubActionTypes.getUser,
      payload: res.data
    });
  };

  // Get user Repos
  const getUserRepos = async (username: string): Promise<void> => {
    setLoading();

    // https://api.github.com/users/bradtraversy/repos?per_page=5&sort=created:asc
    const res = await axios.get(
      `/users/${username}/repos?per_page=5&sort=created:asc`
    );

    dispatch({
      type: GithubActionTypes.getRepos,
      payload: res.data
    });
  };

  // Clear Users
  const clearUsers = (): void =>
    dispatch({ type: GithubActionTypes.clearUsers });

  // Set loading
  const setLoading = (): void =>
    dispatch({ type: GithubActionTypes.setLoading });

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
