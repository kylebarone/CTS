import React from 'react'
import { Link } from 'react-router-dom'


function NotFound() {
    return (
        <>
            <h2 className='float-left'>404 Page</h2>
            <div className='p-4 justify-content-center'>
                <img className="card-img-top" src="./not-found.png" alt="Card image cap" />
                <h3 className='text-center'>Oops! This page was blown away.</h3>
                <Link to="/login" className="btn btn-secondary align-items-center w-100" style={{ textDecoration: "none", minHeight: "32px", }}>
                    Back Home
                    <i className="fas fa-home fa-sm pb-1 pl-1" style={{size:"1.5rem"}}/>
                   
                </Link>
            </div>
        </>
    )
}

export default NotFound