import React, { useState } from 'react';
import LoginHeader from './LoginHeader';
import Footer from './Footer';
// import { validCredential } from '../Service/EmployeeService'
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showFailedAlert, setShowFailedAlert] = useState(false);
    const navigate = useNavigate();

    const loginEmployee = async (e) => {
        e.preventDefault();

        // Retrieve username and password from state variables
        const formData = {
            username: username,
            password: password
        };

        // Example: Validate credentials with backend API
        try {
            const response = await fetch('http://localhost:8099/authentication/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Handle successful login
                setSuccess(true);
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                    // Redirect to dashboard or another page
                    navigate('/register');
                }, 3000);
            } else {
                // Handle failed login
                setShowFailedAlert(true);
                setTimeout(() => {
                    setShowFailedAlert(false);
                }, 3000);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }



    return (
        <div>
            <LoginHeader />
            {showAlert && (
                <div className="alert-container">
                    <Alert severity="success">
                        Login Successful
                    </Alert>
                </div>
            )}

            {showFailedAlert && (
                <div className="alert-container">
                    <Alert severity="error">
                        Login Failed
                    </Alert>
                </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className='container' style={{ marginTop: '-160px', width: '500px' }}>
                    <div className='row'>
                        <div className='card'>
                            <h2 className='text-center'>Login</h2>
                            <div className='card-body'>
                                <form onSubmit={loginEmployee}>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Username : </label>
                                        <input type='text'
                                            placeholder='Please Enter The Username'
                                            name='email'
                                            value={username}
                                            className='form-control'
                                            onChange={(e) => setUsername(e.target.value)}
                                            required>
                                        </input>
                                    </div>

                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Password : </label>
                                        <input type='password'
                                            placeholder='Please Enter The Password'
                                            name='password'
                                            value={password}
                                            className='form-control'
                                            onChange={(e) => setPassword(e.target.value)}
                                            required>
                                        </input>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                        <button className='btn btn-success' type='submit'>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
