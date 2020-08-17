import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div
                className=""
                style={{
                    paddingTop: '2.5rem',
                    paddingBottom: '2.5rem',
                    background: '#000'
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-2 text-center text-md-right pb-4 pb-md-0 order-md-2">
                            <a
                                href="https://www.facebook.com/ftp.myanmar"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="text-white social-link"
                                style={{
                                    fontSize: '25px',
                                    transition: '0.3s ease-in-out'
                                }}
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                        </div>
                        <div className="col-12 col-md-10 align-self-center">
                            <p
                                className="text-center text-md-left p-font text-uppercase mb-0 text-warning"
                                style={{
                                    letterSpacing: '0.5px',
                                    wordSpacing: '1px',
                                    fontSize: '13px',
                                    lineHeight: '2em'
                                }}
                            >
                                Copyright &copy; 2013 - {(new Date().getFullYear())} All rights reserved | <Link to="/" className="text-decoration-none link-hover-white" style={{ color: '#ffc107', transition: '0.3s ease-in-out' }}>Frontier Technology Partners Pte., Ltd.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
