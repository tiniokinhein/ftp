import React, { Component } from 'react'
import Axios from 'axios'
import Iframe from 'react-iframe'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'
import { CONTACT } from '../Constants'


const API_PATH = '/api/contact.php'

export default class Contact extends Component {

    state = {
        post: null,
        fullname: '',
        phone: '',
        email: '',
        messages: '',
        mailSent: false,
        error: null
    }

    fetchMap = () => {
        Axios.get(CONTACT)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })
            .catch(err => err)
    }

    componentDidMount() {
        this.fetchMap()
    }

    resetForm = () => {
        this.setState({
            fullname: '',
            phone: '',
            email: '',
            messages: '',
            mailSent: false,
            error: null
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        Axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type' : 'application/json' },
            data: this.state
        })
        .then(result => {
            this.setState({
                mailSent: result.data.sent
            })
        })
        .catch(error => {
            this.setState({
                error: error.message
            })
        })
    }

    render() {
        const post = this.state.post

        return (
            <div
                style={{
                    paddingTop: '4rem',
                    paddingBottom: '4rem'
                }}
            >
                <div className="container">
                    <div className="row mx-0">
                        {
                            post ? (
                                <div
                                    key={post.nid[0].value}
                                    className="col-12 col-lg-7 px-0"
                                >
                                    <Iframe
                                        url={post.field_map_link[0].uri}
                                        width="100%"
                                        height="100%"
                                        id="location_Id"
                                        className="location-class border-0"
                                        display="block"
                                        position="relative" 
                                    />
                                </div>
                            ) : (
                                <div className="col-12 col-lg-7 px-0">
                                    <div className="location-class border-0 h-100">
                                        <Skeleton height={`100%`} />
                                    </div>
                                </div>
                            )
                        }
                        <div 
                            className="col-12 col-lg-5 bg-dark"
                            style={{
                                padding: '3rem 4rem'
                            }}
                        >
                            <h2
                                className="headTitle text-white mb-4"
                            >
                                Contact Us
                            </h2>
                            <form
                                action="#"
                                className=""
                                id=""
                            >
                                <div className="form-group">
                                    <input
                                        className="form-control bg-transparent py-4 px-0 text-white rounded-0 border-left-0 border-top-0 border-right-0 border-bottom text-capitalize"
                                        type="text"
                                        id="fullname"
                                        name="fullname"
                                        value={this.state.fullname}
                                        onChange={
                                            e => this.setState({
                                                fullname: e.target.value
                                            })
                                        }
                                        placeholder="Full Name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control bg-transparent py-4 px-0 text-white rounded-0 border-left-0 border-top-0 border-right-0 border-bottom"
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={this.state.phone}
                                        onChange={
                                            e => this.setState({
                                                phone: e.target.value
                                            })
                                        }
                                        placeholder="Phone"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control bg-transparent py-4 px-0 text-white rounded-0 border-left-0 border-top-0 border-right-0 border-bottom"
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={
                                            e => this.setState({
                                                email: e.target.value
                                            })
                                        }
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control bg-transparent py-4 px-0 text-white rounded-0 border-left-0 border-top-0 border-right-0 border-bottom"
                                        type="text"
                                        rows="4"
                                        id="messages"
                                        name="messages"
                                        value={this.state.messages}
                                        onChange={
                                            e => this.setState({
                                                messages: e.target.value
                                            })
                                        }
                                        placeholder="Enter Your Messages"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-0 text-center">
                                    <button
                                        type="submit"
                                        onClick={e => this.handleFormSubmit(e)}
                                        className="d-inline-block px-3 py-2 text-capitalize more-link headTitle rounded-0 text-dark bg-warning"
                                        style={{
                                            border: '1px solid #ffc107',
                                            letterSpacing: '1px',
                                            transition: '0.3s ease-in-out'

                                        }}
                                    >
                                        Submit
                                    </button>
                                </div>
                                
                                {
                                    this.state.mailSent &&

                                    <MailsentWrapper 
                                        className="position-fixed shadow-lg bg-warning"
                                    >
                                        <div
                                            className="position-relative h-100"
                                        >
                                            <button 
                                                type="button" 
                                                className="btn"
                                                onClick={this.resetForm}
                                                style={{
                                                    position: 'absolute',
                                                    right: '0',
                                                    top: '20px',
                                                    zIndex: '99999'
                                                }}
                                            >
                                                <span
                                                    className="d-block"
                                                    style={{
                                                        width: '30px',
                                                        height: '2px',
                                                        background: '#000',
                                                        transform: 'rotate(45deg)'
                                                    }}
                                                />
                                                <span
                                                    className="d-block position-relative"
                                                    style={{
                                                        width: '30px',
                                                        height: '2px',
                                                        marginTop: '-2px',
                                                        background: '#000',
                                                        transform: 'rotate(-45deg)'
                                                    }}
                                                />
                                            </button>
                                            <div 
                                                className="col-11 mx-auto h-100"
                                            >
                                                <div
                                                    className="d-table w-100 h-100"
                                                >
                                                    <div
                                                        className="d-table-cell align-middle"
                                                    >
                                                        <h2
                                                            className="headTitle mb-2 font-20"
                                                            style={{
                                                                letterSpacing: '1px',
                                                                fontSize: '24px',
                                                                color: '#000'
                                                            }}
                                                        >Thank you</h2>
                                                        <p
                                                            className="p-font font-12 text-dark mb-0 font-italic"
                                                            style={{
                                                                letterSpacing: '0.5px'
                                                            }}
                                                        >
                                                            Your message has been sent.
                                                        </p>
                                                        <p
                                                            className="headTitle text-dark mt-4"
                                                            style={{
                                                                letterSpacing: '0.5px'
                                                            }}
                                                        >
                                                            We will contact you soon.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </MailsentWrapper>
                                }

                                {
                                    this.state.error &&

                                    <ErrorWrapper 
                                        className="position-fixed shadow-lg"
                                    >
                                        <div
                                            className="position-relative h-100"
                                        >
                                            <button 
                                                type="button" 
                                                className="btn"
                                                onClick={this.resetForm}
                                                style={{
                                                    position: 'absolute',
                                                    right: '0',
                                                    top: '20px',
                                                    zIndex: '99999'
                                                }}
                                            >
                                                <span
                                                    className="d-block"
                                                    style={{
                                                        width: '30px',
                                                        height: '2px',
                                                        background: '#000',
                                                        transform: 'rotate(45deg)'
                                                    }}
                                                />
                                                <span
                                                    className="d-block position-relative"
                                                    style={{
                                                        width: '30px',
                                                        height: '2px',
                                                        marginTop: '-2px',
                                                        background: '#000',
                                                        transform: 'rotate(-45deg)'
                                                    }}
                                                />
                                            </button>
                                            <div 
                                                className="col-11 mx-auto h-100"
                                            >
                                                <div
                                                    className="d-table w-100 h-100"
                                                >
                                                    <div
                                                        className="d-table-cell align-middle"
                                                    >
                                                        <h2
                                                            className="headTitle mb-3 font-20"
                                                            style={{
                                                                letterSpacing: '1px',
                                                                fontSize: '24px',
                                                                color: '#e67e22',
                                                                lineHeight: '1.6em'
                                                            }}
                                                        >FILL ALL :<br />Full Name<br />Phone<br />Email<br />Messages !</h2>
                                                        <p
                                                            className="p-font font-12 text-dark mb-0 font-italic"
                                                            style={{
                                                                letterSpacing: '0.5px'
                                                            }}
                                                        >
                                                            Please try again.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ErrorWrapper>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const MailsentWrapper = styled.div`
    @media screen and (min-width: 992px) {
        left: 20%;
        bottom: 20%;
        right: 20%;
        width: 60%;
        top: 25%;
        background: rgba(230, 126, 34, 0.95);
        z-index: 9999;
    }
    @media screen and (max-width: 991px) {
        left: 30px;
        bottom: 30px;
        right: 30px;
        width: 90%;
        top: 80px;
        background: rgba(230, 126, 34, 0.95);
        z-index: 9999;
    }
`
const ErrorWrapper = styled.div`
    @media screen and (min-width: 992px) {
        left: 20%;
        bottom: 20%;
        right: 20%;
        top: 25%;
        background: #fff;
        z-index: 9999;
    }
    @media screen and (max-width: 991px) {
        left: 30px;
        bottom: 30px;
        right: 30px;
        top: 80px;
        background: #fff;
        z-index: 9999;
    }
`