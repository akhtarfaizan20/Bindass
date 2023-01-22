import { useLocation } from "react-router-dom";
import Home from "./All_Routes/AdminPages/Home";
import AllRoutes from "./All_Routes/AllRoutes";
import Homepage from "./All_Routes/Homepage";
import Login from "./All_Routes/Login";
import Footer from "./Components/Navbar/Footer";
import LoginAuth from "./Components/Navbar/loginAuth";
import Navbar from "./Components/Navbar/Navbar";
import { Box } from "@chakra-ui/react";
function App() {
  const { pathname } = useLocation();

  let arr = pathname.split("/");

  if (arr[1] === "admin") {
    return <Home />;
  }

  return (
    <div className="App">
      <Navbar />
      <Box pt={"70px"}>
        <AllRoutes />
        <Footer />
      </Box>
    </div>
  );
}

export default App;
