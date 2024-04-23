import { ReactNode } from 'react';

interface FooterProps {
  children: ReactNode;
}

function Footer(props: FooterProps): JSX.Element {
  return <footer {...props} />;
}

export type { FooterProps };
export default Footer;
