import Navbar from "./components/Navbar.js";
import Banner from "./components/Home/Banner.js";
import Display from "./components/Home/Display.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home/Home.js";
import Shop from "./components/Shop/Shop.js";
import routes from "./route/routes";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useRoutes,
  NavLink,
} from "react-router-dom";

function App() {
  const element = useRoutes(routes);
  return (
    <>
      <Navbar />
      {element}
      <Footer />
    </>
  );
}

export default App;
