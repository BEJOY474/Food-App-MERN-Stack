import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import AllPizza from "./page/pizza/AllPizza";
import Cart from "./page/cart/Cart";
import Home from "./page/home/Home"
import Contact from "./page/contact/Contact";
import "./App.css"
import Order from "./page/order/Order";
function App() {
  return (
    <BrowserRouter>
      {/* Wrap both the Navbar and Routes with BrowserRouter */}
      <Navbar />
      
      {/* Define your routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/allPizza" element={<AllPizza />} />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/order" element={ <Order /> } />

      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
