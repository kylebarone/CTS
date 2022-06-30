import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import questions from '../../data/faqQuestions'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactCard from '../shared/ContactCard';


function FaqQuestion({ id, question, answer }) {
    return (
        <>
            <div className="row">
                <div className="col-12" id="accordion">
                    <div className="card card-primary card-outline">
                        <a className="d-block w-100" data-toggle="collapse" href="#collapseOne">
                            <div className="card-header">
                                <h4 className="card-title w-100">
                                    <>{id}. {question}</>
                                </h4>
                            </div>
                        </a>
                        <div id="collapseOne" className="collapse show" data-parent="#accordion">
                            <div className="card-body">
                                {answer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function FaqPage() {

    const [questionState, setQuestions] = useState(questions)
    let q = "How can I do my taxes";
    let a = "Follow our steps and kick while we do them for you";


    return (

        <div>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid faq">
                        <h1>Frequently Asked Questions</h1>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <div className='content'>
                    <div className='card'>
                        <div className='card-body row'>
                            <div className='col-5 text-center d-flex align-items-center justify-content-center'>
                                <ContactCard />
                            </div>
                            <div className='col-7 '>
                                <section className="faq">
                                    <FaqQuestion id={1} question={q} answer={a} />
                                    <FaqQuestion id={2} question={q} answer={a} />
                                    <FaqQuestion id={3} question={q} answer={a} />
                                    <FaqQuestion id={4} question={q} answer={a} />
                                    <div className='text-center align-items-center justify-content-center'>
                                        <h5>Still have questions?</h5>
                                        <Link to="/contact">Contact Us</Link>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}


        </div>
    )
}

export default FaqPage