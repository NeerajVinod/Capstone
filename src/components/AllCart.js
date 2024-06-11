import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NavComponent from './nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const AllCart = () => {
    const [carts, setCarts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const userId = localStorage.getItem('userId'); // Assuming the userId is hardcoded for now

    useEffect(() => {
        fetchCarts();
    }, []);

    const fetchCarts = async () => {
        try {
            const response = await axios.get(`http://localhost:8099/buy/get-carts?userId=${userId}`);
            setCarts(response.data);
        } catch (error) {
            console.error("Error fetching cart details:", error);
        }
    };

    const handleCheckout = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <NavComponent />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {carts.map(cart => (
                    <Card key={cart.id} style={{ width: '18rem', margin: '10px' }}>
                        <Card.Body>
                            <Card.Title>{cart.user.fname} {cart.user.lname}</Card.Title>
                            <Card.Text>
                                Username: {cart.user.username}
                                <br />
                                Email: {cart.user.email}
                            </Card.Text>
                            {cart.products.map(product => (
                                <div key={product.id}>
                                    <Card.Img variant="top" src={product.imageurl || 'default_image_url'} />
                                    <Card.Text>
                                        Name: {product.name}
                                        <br />
                                        Description: {product.description}
                                        <br />
                                        Price: ${product.productPrice}
                                        <br />
                                        Quantity: {product.qty}
                                    </Card.Text>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <Button variant="primary" onClick={handleCheckout}>Checkout</Button>

            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Finished</Modal.Title>
                </Modal.Header>
                <Modal.Body>You can proceed to pay.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Proceed to Pay
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AllCart;
