import { Helmet } from 'react-helmet';

interface SeoProps {
  description?: string;
  title?: string;
}

function Seo(props: SeoProps): JSX.Element {
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
}

export type { SeoProps };
export default Seo;
