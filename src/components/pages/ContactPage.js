import React,  {useRef} from 'react'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext";
import ContactCard from '../shared/ContactCard'

function ContactPage() {
    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();
    const { currentUser } = useAuth();

    function handleSubmit(e) {
        console.log(e)
    }
    return (
        <div>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Contact us</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                    <li className="breadcrumb-item active">Contact us</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    {/* Default box */}
                    <div className="card">
                        <div className="card-body row">
                            <div className="col-5 text-center d-flex align-items-center justify-content-center">
                                <ContactCard />
                            </div>
                            <div className="col-7">
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group id='name'>
                                        <Form.Label>Name</Form.Label>
                                        {/* The ref below is so we have a reference to get the value ater*/}
                                        <Form.Control type="text" ref={nameRef} required />
                                    </Form.Group>
                                    <Form.Group id='email'>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" ref={emailRef} required defaultValue={(!currentUser ? "" : currentUser.email)} />
                                    </Form.Group>
                                    <Form.Group id='subject'>
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control type="text" ref={subjectRef} required />
                                    </Form.Group>
                                    <Form.Group id='message'>
                                        <Form.Label>Message</Form.Label>
                                        {/* The ref below is so we have a reference to get the value ater*/}
                                        <Form.Control as="textarea" rows={3} ref={messageRef} required />
                                    </Form.Group>
                                    <Form.Group>
                                    <input type="submit" className="btn btn-primary  btn-md mt-2 mr-3 float-right" defaultValue="Send message" />
                                    </Form.Group>
                                </Form>

                            </div>
                        </div>
                    </div>
                </section>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}

        </div>
    )
}

export default ContactPage