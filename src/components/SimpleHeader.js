import React from 'react'
import logo from '../../src/components/Logo.jpg'

const SimpleHeader = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black' }}>
                <a className="navbar-brand text-white" href="#">
                    <img src={logo} width="125" height="75" alt="#"></img>
                </a>
            </nav>
        </div>
    );

}

export default SimpleHeader