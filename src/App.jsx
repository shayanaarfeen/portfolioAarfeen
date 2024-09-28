import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import HomePage from './page/HomePage';
import Nopage from "./page/Nopage";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Nopage />} />
      </Route>
    )
  );


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
