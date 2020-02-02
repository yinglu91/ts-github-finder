import React, { useEffect, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';
import { GithubContextProps } from '../../context/github/types';

interface Props extends RouteComponentProps<{ login: string }> {}
const User: React.FC<Props> = props => {
  const githubContext = useContext<GithubContextProps>(GithubContext);
  const { user, getUser, loading, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(props.match.params.login);
    getUserRepos(props.match.params.login);
    // eslint-disable-next-line
  }, []);
  // above comment helps to get rid of warning

  if (loading) {
    return <Spinner />;
  }

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    company,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  return (
    <>
      <Link to='/' className='btn btn-light'>
        Back To Search
      </Link>
      Hireable: {` `}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt=''
            className='round-img'
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <a
            href={html_url}
            className='btn btn-dark my-1'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit Github Profile
          </a>

          <ul>
            <li>
              {login && (
                <>
                  <strong>Username: </strong> {login}
                </>
              )}
            </li>

            <li>
              {company && (
                <>
                  <strong>Company: </strong> {company}
                </>
              )}
            </li>

            <li>
              {blog && (
                <>
                  <strong>Website: </strong> {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-white'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </>
  );
};

export default User;
