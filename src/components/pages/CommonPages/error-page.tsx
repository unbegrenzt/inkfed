import { useRouteError } from "react-router-dom";
import { RouteError } from "types/Error";

export default function ErrorPage() {
  const error: RouteError | unknown = useRouteError();

  if (typeof error === 'object' && error !== null && 'statusText' in error) {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{(error as RouteError).statusText}: {(error as RouteError).message}</i>
        </p>
      </div>
    );
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
