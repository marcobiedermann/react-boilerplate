import React from 'react';

const Main: React.FC = (props) => {
  const { children } = props;

  return <main>{children}</main>;
};

export default Main;
