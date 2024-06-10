import React, { useState, useEffect } from "react";
import axios from "axios";


const AddtoCart = () => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    // Provide userId as a hardcoded value for testing
    const userId = '1';

    useEffect(() => {
        fetchCartItems(userId); // Call fetchCartItems with the hardcoded userId
    }, []); // Fetch cart items when the component mounts

    const fetchCartItems = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:8099/cart/user/${userId}`);
            setCart(response.data.cartItems || []); // Provide a default empty array if cart items are undefined
            calculateTotal(response.data.cartItems || []); // Provide a default empty array if cart items are undefined
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };

    const calculateTotal = (items) => {
        let total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setCartTotal(total);
    };

    // Render items and cart total
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
                                    <p>Price: ${item.price}</p>
                                    <label>Quantity: {item.quantity}</label>
                                </div>
                                <div>
                                    <p>Subtotal: ${item.price * item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        <h3>Total: ${cartTotal.toFixed(2)}</h3>
                        <button>Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default AddtoCart;

