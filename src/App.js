import NavBar from "./components/navbar";
import Recipes from "./pages/recipes";
import Recipe from "./pages/recipe";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  { path: "/", element: <Recipes /> },
  { path: "/recipes", element: <Recipes /> },
  { path: "/recipes/:id", element: <Recipe /> }
]);

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
