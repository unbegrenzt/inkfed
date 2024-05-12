
import {
  RouterProvider,
} from "react-router-dom";

import router from 'hooks/createBrowserRouter/index.tsx';

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
