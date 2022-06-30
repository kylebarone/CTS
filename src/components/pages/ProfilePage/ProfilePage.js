import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from "../../../contexts/AuthContext"
import Login from '../LoginPage';



function ProfilePage() {

    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            setError('');
            setLoading(true);
            await logout();
            navigate("/login")
        } catch (err) {
            console.log(err);
            setError('Failed to Log Out');
        }
    }

    return (
        <>
            <Card>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-5'>
                <Card.Body>      
                    <div className='text-center'>
                        <h2 className='mb-3'>Profile</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <strong>Email:</strong>{currentUser.email}
                        <Link to="update-profile" className='btn btn-primary w-100 mt-3'>
                            Update Profile
                        </Link>
                    </div>
                </Card.Body>
                </div>
                </div>
            </Card>
            <div className='w-100 text-center mt-2'>
                <Button variant='link' onClick={handleLogout}>Log Out</Button>
            </div>
            <Outlet />
        </>
    )
}

export default ProfilePage;