import { createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  ErrorPage,
} from 'components/pages'

const router = createBrowserRouter([{
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
