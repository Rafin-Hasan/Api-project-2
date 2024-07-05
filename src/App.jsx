import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Laptops from "./Pages/Laptops";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";
import Employees from "./Pages/Employees";
import Details from "./Pages/Details";
import Order from "./Pages/Order";
import LayoutOne from "./Layout/LayoutOne";
import Confirm from "./Pages/Confirm";
import EmployeeData from "./Pages/EmployeeData";
import Let from "./Pages/Let";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/laptop" element={<Laptops />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employeedata" element={<EmployeeData />} />
          <Route path="/let" element={<Let />} />
          <Route path="/details" element={<Details />} />
          <Route path="/order" element={<Order />} />
          <Route path="/confirm" element={<Confirm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
