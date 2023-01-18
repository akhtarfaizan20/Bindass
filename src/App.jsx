import AllRoutes from "./All_Routes/AllRoutes";
import Homepage from "./All_Routes/Homepage";
import Login from "./All_Routes/Login";
import Footer from "./Components/Navbar/Footer";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
     
   
    
    </div>
  );
}

export default App;
