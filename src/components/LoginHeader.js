import React from 'react'
import logo from '../../src/components/Logo.jpg'

const LoginHeader = () => {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'black', color: 'white' }}>
                <a className="navbar-brand" href="" style={{ color: 'white' }}> {/* Set the brand link to have white text */}
                    <img src={logo} width="125" height="75" alt=""></img>
                </a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/register" style={{ color: 'white', fontSize:'20px' }}>SignUp</a>
                    </div>
                </div>
            </nav>
        </div>
    );

}

export default LoginHeader