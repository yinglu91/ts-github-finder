import React from 'react';
import { Repo } from '../../context/github/types';

interface Props {
  repo: Repo;
}

const RepoItem: React.FC<Props> = ({ repo }) => {
  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
          {repo.name}
        </a>
      </h3>
    </div>
  );
};

export default RepoItem;
