import React, { useRef, useState } from 'react';
import { Form, Alert, Button } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';


function ForgotPassword() {

    const emailRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');
    const [message, setMessage] = useState('');
    const { resetPassword } = useAuth();


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage("Check your inbox further instructions")
        } catch (err) {
            console.log(err);
            setError("Failed to reset password");
        }
        setLoading(false);
    }

    return (
        <div className='card'>
            <div className='card-top'>
                <h2>Forgot Password</h2>
            </div>
            <div className='card-body'>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Associated Email</Form.Label>
                        {/* The ref below is so we have a reference to get the value ater*/}
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Button type="submit" className='w-100 mt-2' disabled={loading}>Reset Password</Button>
                </Form>
                <div className='w-100 text-center mt-2'>
                    <Link to="forgot-password">Forgot Password?</Link>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword