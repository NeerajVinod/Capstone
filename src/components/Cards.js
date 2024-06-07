
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import ProductDetails from './ProductDetails';

import axios from 'axios';

function Cards() {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8099/api/products')
            .then(response => response.json())
            .then(data => {
                setCardsData(data);
            })
            .catch(error => {
                console.error('Error fetching card data:', error);
            });
    }, []);

    console.log('Details:', cardsData.id);
    console.log('Details:', cardsData.name);
    if (!Array.isArray(cardsData)) {
        return <div>Loading...</div>;
    }




    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {Array.isArray(cardsData) && cardsData.map(card => (
                <div key={card.id}>
                    <Link to={`/${card.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>

                        <Card style={{ flex: '0 0 calc(25% - 10px)', margin: '30px', width: '20rem' }}>
                            <Card.Img variant="top" src={card.imageurl} style={{ height: '200px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{card.name}</Card.Title>
                                <Card.Text>{card.description}</Card.Text>
                                <Card.Text>{card.productPrice}</Card.Text>
                                <Button variant="primary" style={{ backgroundColor: '#000000', border: 'none' }}>Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Cards;
