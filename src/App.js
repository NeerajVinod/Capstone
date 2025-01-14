import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
//import Header from './components/Header';
import SignupPage from './components/SignupPage';
import 'bootstrap/dist/css/bootstrap.css';
//import Nav from './components/nav'
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import AddtoCart from './components/AddtoCart'
import AllCart from './components/AllCart';


function App() {
    return (
        <Router>
            <div className="App">

                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<SignupPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path= "/:id" element={<ProductDetails />} />
                    <Route path="/cart" element={<AddtoCart />} />
                    <Route path="/Allcart" element={<AllCart />} />
                </Routes>
            </div>
        </Router>

    );
}
//<Route path="/Productdetails/:id" component={ProductDetails } />

export default App;


