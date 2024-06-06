import React from 'react'


import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
    // Array of card data
    const cardsData = [
        { id: 1, title: 'Watch 1', text: 'Analog watch ', image: 'https://th.bing.com/th/id/R.4ec61eb060bbf702efd92012b06d4c44?rik=nYID1b7CANCi5g&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2017%2f11%2f17%2f230769-luxury_watches-watch.jpg&ehk=wmxlUeDr%2bMv6xhv4pPDTnsPAN2L3D2EmzjVqvhbbyAQ%3d&risl=&pid=ImgRaw&r=0' },
        { id: 2, title: 'Watch 2', text: 'Analog watch ', image: 'https://th.bing.com/th/id/OIP.NaSAiNCOsUnfgjowKG1f6AHaEv?w=229&h=180&c=7&r=0&o=5&pid=1.7' } ,
        { id: 3, title: 'Watch 3', text: 'Analog watch ', image: 'https://ae01.alicdn.com/kf/HTB1QrACmdknBKNjSZKPq6x6OFXa6/Ladies-Fashion-Quartz-Watch-Women-Rhinestone-Leather-Casual-Dress-Women-s-Watch-Rose-Gold-Crystal-relogio.jpg' },
        { id: 4, title: 'Watch 4', text: 'Analog watch ', image: 'https://ae01.alicdn.com/kf/HTB1CYDuocnI8KJjSspeq6AwIpXal/Luxury-Women-Watches-Simple-Ladies-Steel-Watch-Rose-Gold-Elegant-Minimalism-Casual-Black-Female-Waterproof-Clock.jpg' },
        { id: 5, title: 'Watch 5', text: 'Smart watch', image: 'https://th.bing.com/th/id/R.ae20930a1209c50267d828295b710570?rik=p%2bby%2bbxQ%2f2EXUg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f13%2fSmartwatch-PNG-Image.png&ehk=i8LCKtoxoPEqO4YOhrkYbGI7VuLFPHDkkoMRlpf%2fCiQ%3d&risl=&pid=ImgRaw&r=0' },
        { id: 6, title: 'Watch 6', text: 'Digital watch', image: 'https://s.ecrater.com/stores/421931/5c1c9fa8424cc_421931b.jpg' },
        { id: 7, title: 'Watch 7', text: 'Digital watch', image: 'https://images-na.ssl-images-amazon.com/images/I/61iwebuDGKL.jpg' },
        { id: 8, title: 'Watch 8', text: 'Digital watch', image: 'https://images-na.ssl-images-amazon.com/images/I/71VgNVCnd8L._AC_UL1500_.jpg' },
        { id: 9, title: 'Watch 9', text: 'Digital watch', image: 'https://ae01.alicdn.com/kf/HTB18V9fH7yWBuNjy0Fpq6yssXXaY/REBIRTH-Bracelet-Watch-Women-Quartz-Gold-Watch-Steel-Bracelet-Clock-Waterproof-Fashion-Casual-Women-s-Watches.jpg' },
        { id: 10, title: 'Watch 10', text: 'Digital watch', image: 'https://ae01.alicdn.com/kf/HTB139xWaKGSBuNjSspbq6AiipXaT/reloj-mujer-Silver-Women-s-Watches-Luxury-Fashion-Brand-Women-Dress-Watch-Alloy-Quartz-Wrist-Watch.jpg' },
        { id: 11, title: 'Watch 11', text: 'Digital watch', image: 'https://www.bhphotovideo.com/images/images2500x2500/samsung_sm_r825ussaxar_galaxy_watch_active2_lte_1491580.jpg' },
        { id: 12, title: 'Watch 12', text: 'Digital watch', image: 'https://i5.walmartimages.com/asr/21a4cad9-4a26-4f8e-b653-0378e4c175be_1.fead6583f724dec83f4b67cd554a9c73.jpeg' },
        { id: 13, title: 'Watch 13', text: 'Digital watch', image: 'https://cloutwatches.com/wp-content/uploads/2020/09/9409475-1.jpg' },
        { id: 14, title: 'Watch 14', text: 'Digital watch', image: 'https://images-eu.ssl-images-amazon.com/images/I/81mBCASgaQL.jpg' }

        // Add more card data as needed
    ];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {cardsData.map(card => (
                <div key={card.id}>
                    <Link to={`/ProductDetails/${card.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Card style={{ flex: '0 0 calc(25% - 10px)', margin: '30px', width: '10rem' }}>
                            <Card.Img variant="top" src={card.image} style={{ height: '200px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.text}</Card.Text>
                                <Button variant="primary" style={{
                                    backgroundColor: '#010000', border: '2px solid #000000' }}>Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Cards;


