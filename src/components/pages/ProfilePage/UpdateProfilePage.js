import React, { useRef, useState } from 'react'
import { FormCard, Button, Card, Form, Alert } from 'react-bootstrap'
import { useAuth } from "../../../contexts/AuthContext"
import { Link, useNavigate } from 'react-router-dom'

function UpdateProfilePage() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError("Passwords do not match");
    }

    const promises = []
    setLoading(true);
    setError('')
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordConfirmRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises).then(() => {
      navigate('/')
    }).catch(() => {
      setError("Failed to update account")
    }).finally(()  => {
      setLoading(false)
    })



  }


  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-3'>Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              {/* The ref below is so we have a reference to get the value ater*/}
              <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email} />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              {/* The ref below is so we have a reference to get the value ater*/}
              <Form.Control type="password" ref={passwordRef} placeholder='Leave blank to keep the same' />
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Password Confirmation</Form.Label>
              {/* The ref below is so we have a reference to get the value ater*/}
              <Form.Control type="password" ref={passwordConfirmRef} placeholder='Leave blank to keep the same' />
            </Form.Group>
            <Button type="submit" className='w-100 mt-2' disabled={loading}>Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Link to="/profile">Cancel</Link>
      </div>
    </div>
  )
}

export default UpdateProfilePage