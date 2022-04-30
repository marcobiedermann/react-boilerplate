import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from 'react-router-dom';

interface LinkProps extends ReactRouterLinkProps {
  to: string;
}

function Link(props: LinkProps): JSX.Element {
  const { children, to, ...otherProps } = props;
  const isInternal = /^\/(?!\/)/.test(to);

  if (isInternal) {
    return (
      <ReactRouterLink to={to} {...otherProps}>
        {children}
      </ReactRouterLink>
    );
  }

  return (
    <a href={to} target="_blank" rel="noopener noreferrer" {...otherProps}>
      {children}
    </a>
  );
}

export type { LinkProps };
export default Link;
