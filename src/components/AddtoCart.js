import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddtoCart = () => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    //const productId = 5;
    const userId = localStorage.getItem('userId');
    const productId = localStorage.getItem('productId');

    const navigate = useNavigate();
    console.log('productid : ', productId);// Get the navigate function

    useEffect(() => {
        fetchCartItems(userId, productId); // Call fetchCartItems with the hardcoded userId
    }, []); // Fetch cart items when the component mounts

    const fetchCartItems = async (userId,productId) => {
        try {
            const response = await axios.post(`http://localhost:8099/buy?userId=${userId}&productId=${productId}`, {
                qty: "1",

            });
            console.log(response);
            setCart(response.data.products || []); // Set the products array from the response
            calculateTotal(response.data.products || []); // Calculate total from the products array
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };

    const calculateTotal = (items) => {
        let total = items.reduce((acc, item) => acc + parseFloat(item.productPrice), 0); // Parse productPrice to float
        setCartTotal(total);
    };

    const handleCheckout = () => {
        navigate('/Allcart'); // Navigate to the Allcart route
    };

    return (
        <div className="cart-page">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.productPrice}</p>
                                </div>
                                <div>
                                    <p>Subtotal: ${item.productPrice}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        <h3>Total: ${cartTotal.toFixed(2)}</h3>
                        <button onClick={handleCheckout}>Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default AddtoCart;


