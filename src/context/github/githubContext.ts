import { createContext } from 'react';
import { GithubContextProps, User } from './types';

const ininitial = {
  users: [],
  user: {} as User,
  repos: [],
  loading: false,

  // searchUsers: (text: string) => Promise<null>;
  // clearUsers: () => void;
  // getUser: (username: string) => Promise<null>;
  // getUserRepos: (username: string) => Promise<null>;

  searchUsers: () => null,
  clearUsers: () => null,
  getUser: () => null,
  getUserRepos: () => null
};
const githubContext = createContext<GithubContextProps>(ininitial);

export default githubContext;
