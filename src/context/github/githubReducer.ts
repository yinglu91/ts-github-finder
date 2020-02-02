import { GithubActionTypes, GithubReducerState, GithubAction } from './types';

export default (state: GithubReducerState, action: GithubAction) => {
  switch (action.type) {
    case GithubActionTypes.searchUsers:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case GithubActionTypes.getUser:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case GithubActionTypes.clearUsers:
      return {
        ...state,
        users: [],
        loading: false
      };
    case GithubActionTypes.getRepos:
      return {
        ...state,
        repos: action.payload,
        loading: false
      };
    case GithubActionTypes.setLoading:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
