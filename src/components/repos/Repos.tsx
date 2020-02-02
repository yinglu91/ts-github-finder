import React from 'react';
import RepoItem from './RepoItem';
import { Repo } from '../../context/github/types';

interface Props {
  repos: Repo[];
}

//rafce
const Repos: React.FC<Props> = props => {
  // can't return an array from React.FC, so need Fragment <>
  return (
    <>
      {props.repos &&
        props.repos.map(repo => <RepoItem repo={repo} key={repo.id} />)}
    </>
  );
};

export default Repos;
