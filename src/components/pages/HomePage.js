import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

function HomePage() {

    const { currentUser } = useAuth();

    return (
        <div>
            <h1>User {currentUser.email} Dashboard</h1>
        </div>
    )
}

export default HomePage