interface ErrorProps {
  message: string;
}

function Error(props: ErrorProps): JSX.Element {
  const { message } = props;

  return <div>{message}</div>;
}

export type { ErrorProps };
export default Error;
