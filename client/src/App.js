import { 
  createBrowserRouter,
  RouterProvider,
  Outlet } from "react-router-dom";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import './app.scss'
const Layout = ({children}) => {
  return (
    <div className="app">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children: [
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/products/:id",
        element: <Products/>,
      },
      {
        path: "/product/:id",
        element: <Product/>,
      }
    ]
  },
  
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
