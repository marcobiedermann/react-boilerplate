import React from 'react';

export interface BreadcrumbProps {
  routes: any;
}

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const { routes } = props;

  return (
    <ul>
      {routes.map((route: any) => (
        <li key={route.path}>{route.name}</li>
      ))}
    </ul>
  );
};

export default Breadcrumb;
