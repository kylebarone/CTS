import React, { useRef, useState, useEffect } from 'react'
import { Button, Card, Form, Alert } from 'react-bootstrap'
import { useAuth } from "../../contexts/AuthContext"
import { Link, Outlet, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function errorHandling(error) {
        if (error.name === 'FirebaseError') {
            if (error.code.includes("wrong-password")) {
                setError("Invalid Password")
            } else if (error.code.includes("user-not-found")) {
                setError("No active user found at this id, please check the spelling or create an account if none exist.") // wording need to be checked
            }
        }
    }


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/home')
        } catch (err) {
            errorHandling(err);
            console.log(err)
            console.log(typeof err)
            console.log(JSON.stringify(err))
            setError("Failed to sign in")
        }
        setLoading(false);
    }

    useEffect(() => {    
        if (currentUser) {
            navigate('/', {replace:true})
        } 
      });

    return (
        <>
            <Card>
                <div className='row d-flex justify-content-center'>
                <div className='col-md-5'>
                <Card.Body>
                    <h2 className='mb-3 text-center'>Login</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button type='submit' className='w-100 mt-2' disabled={loading}>Log In</Button>
                    </Form>
                    <div className='w-100 text-center mt-2'>
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </Card.Body>
                </div>
                </div>
            </Card>
            <div className='w-100 text-center mt-2'>
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
            <Outlet />
        </>
    )
}

export default LoginPage