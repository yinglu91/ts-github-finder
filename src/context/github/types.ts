/**
 * Action types
 */
export enum GithubActionTypes {
  searchUsers,
  getUser,
  clearUsers,
  getRepos,
  setLoading
}

export interface SearchUsersAction {
  type: GithubActionTypes.searchUsers;
  payload: User[];
}

export interface GetUserAction {
  type: GithubActionTypes.getUser;
  payload: User;
}

export interface ClearUsersAction {
  type: GithubActionTypes.clearUsers;
}

export interface GetReposAction {
  type: GithubActionTypes.getRepos;
  payload: Repo[];
}

export interface SetLoadingAction {
  type: GithubActionTypes.setLoading;
}

export type GithubAction =
  | SearchUsersAction
  | GetUserAction
  | ClearUsersAction
  | GetReposAction
  | SetLoadingAction;

/**
 * Data type
 *
 */

// https://api.github.com/users/bradtraversy
// http://localhost:3000/users/bradtraversy   -- proxy
export interface User {
  id: number;
  name: string;
  avatar_url: string;
  location: string;
  bio: string;
  blog: string;
  login: string;
  company: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  hireable: boolean;
}

// https://api.github.com/users/bradtraversy/repos?per_page=5&sort=created:asc
export interface Repo {
  id: number;
  name: string;
  html_url: string;
}

/**
 * State type
 */
export interface GithubReducerState {
  users: User[];
  user: User;
  repos: Repo[];
  loading: boolean;
}

// Github context (store) holds state & functions
export interface GithubContextProps {
  users: User[];
  user: User;
  repos: Repo[];
  loading: boolean;

  searchUsers: Function;
  clearUsers: Function;
  getUser: Function;
  getUserRepos: Function;
}

// searchUsers: (text: string) => Promise<null>;
// clearUsers: () => void;
// getUser: (username: string) => Promise<null>;
// getUserRepos: (username: string) => Promise<null>;
