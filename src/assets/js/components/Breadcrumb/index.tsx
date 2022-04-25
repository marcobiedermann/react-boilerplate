import React from 'react';

export interface BreadcrumbProps {
  routes: any;
}

function Breadcrumb(props: BreadcrumbProps): JSX.Element {
  const { routes } = props;

  return (
    <ul>
      {routes.map((route: any) => (
        <li key={route.path}>{route.name}</li>
      ))}
    </ul>
  );
}

export default Breadcrumb;
