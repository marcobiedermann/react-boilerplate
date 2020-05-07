import React from 'react';
import { Helmet } from 'react-helmet';

interface SeoProps {
  title: string;
  description?: string;
}

const Seo: React.FC<SeoProps> = (props) => {
  const { description, title } = props;

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}

      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}

      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
    </Helmet>
  );
};

export default Seo;
