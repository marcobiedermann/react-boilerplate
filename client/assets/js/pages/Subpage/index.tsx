import React from 'react';
import { RouteProps } from 'react-router-dom';
import Seo from '../../components/Seo';

const Subpage: React.FC<RouteProps> = () => {
  return (
    <>
      <Seo title="Subpage" />
      <h1>Subpage</h1>
    </>
  );
};

export default Subpage;
