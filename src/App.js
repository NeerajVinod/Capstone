import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
//import Header from './components/Header';
import SignupPage from './components/SignupPage';
import 'bootstrap/dist/css/bootstrap.css';
//import Nav from './components/nav'
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
//import ProductDetails from './components/ProductDetails';


function App() {
    return (
        <Router>
            <div className="App">

                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<SignupPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/:id" element={<ProductDetails/> } />


                </Routes>
            </div>
        </Router>

    );
}
//<Route path="/Productdetails/:id" component={ProductDetails } />

export default App;

