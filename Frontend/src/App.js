import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Container} from 'react-bootstrap';
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";

function App() {
  return (

    <BrowserRouter>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path = "/cart/:id" element ={<CartScreen />} />
            <Route path = "/cart" element ={<CartScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
    </BrowserRouter>
 
  );
}

export default App;
