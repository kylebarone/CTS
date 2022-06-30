import React, { useRef, useState } from 'react'
import { FormCard, Button, Card, Form, Alert } from 'react-bootstrap'
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()

    
        //validation checks
        // console.log(passwordRef.current.value)
        // console.log(passwordConfirmRef.current.value)
        // console.log(typeof signup)
        // console.log(useAuth);
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setError("Passwords do not match");
        } else {
            try {
                setError('');
                setLoading(true);
                await signup(emailRef.current.value, passwordRef.current.value);
                navigate("/");
            } catch (err) {
                console.log(err);
                setError("Failed to create an account");
            }
            setLoading(false);
        }

        
    }


    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-3'>Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            {/* The ref below is so we have a reference to get the value ater*/}
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            {/* The ref below is so we have a reference to get the value ater*/}
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            {/* The ref below is so we have a reference to get the value ater*/}
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button type="submit" className='w-100 mt-2' disabled={loading}>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Already have an account?<Link to="/login">Log In</Link>
            </div>
        </div>
    )
}

export default SignUp