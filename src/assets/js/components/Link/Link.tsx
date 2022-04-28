import { Link as ReactRouterLink, LinkProps } from 'react-router-dom';

type LinkProps = LinkProps;

function Link(props: LinkProps): JSX.Element {
  const { to, ...otherProps } = props;
  const isInternal = /^\/(?!\/)/.test(to);

  if (isInternal) {
    return <ReactRouterLink to={to} {...otherProps} />;
  }

  return <a href={to} target="_blank" rel="noopener noreferrer" {...otherProps} />;
}

export type { LinkProps };
export default Link;
