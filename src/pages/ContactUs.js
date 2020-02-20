import React, { Component , Suspense } from 'react'
import Axios from 'axios'
import Helmet from 'react-helmet'
import Skeleton from 'react-loading-skeleton'
import Parser from 'html-react-parser'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import AOS from 'aos'
import styled from 'styled-components'
import {
    CONTACT_HEADER,
    MM_OFFICE,
    SG_OFFICE
} from '../Constants'
import LOGO from '../ftp_logo.png'


const Layout = React.lazy(() => import('../components/layout/Layout'))


const API_FORM_PATH = '/api/contact-us.php'

export default class ContactUs extends Component {

    state = {
        header: null,
        mm: null,
        sg: null,
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        messages: '',
        mailSent: false,
        error: null
    }

    fetchHEADER = () => {
        Axios.get(CONTACT_HEADER)
            .then(res => {
                this.setState({
                    header: res.data
                })
            })
    }

    fetchMM = () => {
        Axios.get(MM_OFFICE)
            .then(res => {
                this.setState({
                    mm: res.data
                })
            })
    }

    fetchSG = () => {
        Axios.get(SG_OFFICE)
            .then(res => {
                this.setState({
                    sg: res.data
                })
            })
    }

    resetForm = () => {
        this.setState({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            messages: '',
            mailSent: false,
            error: null
        })
    }

    componentDidMount() {
        this.fetchHEADER()
        this.fetchMM()
        this.fetchSG()
        window.scrollTo(0,0)
        AOS.init()
    }

    handleFormSubmit = e => {
        e.preventDefault()
        Axios({
            method: 'post',
            url: `${API_FORM_PATH}`,
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
        const header = this.state.header
        const mm = this.state.mm
        const sg = this.state.sg

        return (

            <Suspense 
                fallback={
                    <div
                        className="position-fixed"
                        style={{
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            background: 'rgba(255, 255, 255, 0.63)',
                        }}
                    >
                        <div
                            className="d-table mx-auto h-100 text-center"
                        >
                            <div
                                className="d-table-cell align-middle"
                                style={{
                                    width: '70px',
                                    height: '40px',
                                    background: "transparent url("+ LOGO +") no-repeat center",
                                    backgroundSize: 'auto'
                                }}
                            />
                        </div>
                    </div>
                }
            >
                <Layout>

                    {
                        header ? (
                            <div
                                key={header.nid[0].value}
                                className="bg-light"
                            >
                                <Helmet 
                                    title="Contact Us"
                                    meta={[
                                        {
                                            name: 'description',
                                            content: 'Building 17, 2nd Floor, MICT Park, Hlaing Township, Yangon, Myanmar.'
                                        },
                                        {
                                            property: 'og:description',
                                            content: 'Building 17, 2nd Floor, MICT Park, Hlaing Township, Yangon, Myanmar.'
                                        },
                                        { property: 'og:title', content: 'Contact Us - Frontier Technology Partners' },
                                        { property: 'og:url', content: `${window.location.href}` },
                                        { property: 'og:image', content: `${header.field_page_headers_image[0].url}` },
                                        { property: 'twitter:image:src', content: `${header.field_page_headers_image[0].url}` },
                                        { property: 'twitter:title', content: 'Contact Us - Frontier Technology Partners' },
                                        { property: 'twitter:description', content: 'Building 17, 2nd Floor, MICT Park, Hlaing Township, Yangon, Myanmar.' }
                                    ]}
                                >
                                    <link rel="canonical" href={window.location.href} />
                                </Helmet>

                                <LazyLoadImage
                                    src={header.field_page_headers_image[0].url}
                                    alt=""
                                    width="100%"
                                    height="100%"
                                    style={{
                                        height: '50vh',
                                        minHeight: '300px',
                                        objectFit: 'cover',
                                        filter: 'brightness(85%)'
                                    }}
                                    effect="blur"
                                />
                                <div className="container">
                                    <h2
                                        className="headTitle default-color text-uppercase text-center mb-0 pb-5"
                                        style={{
                                            paddingTop: '4rem',
                                            letterSpacing: '1px'
                                        }}
                                    >
                                        {Parser(header.title[0].value)}
                                    </h2>
                                </div>
                            </div>
                        ) : (
                            <div
                                className="bg-light"
                            >
                                <Skeleton height={330} />
                                <div className="container">
                                    <div
                                        className="text-center pb-5"
                                        style={{
                                            paddingTop: '4rem'
                                        }}
                                    >
                                        <Skeleton height={30} width={200} />
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    <div
                        className="bg-light"
                    >
                        <div className="container">

                            {
                                mm ? (
                                    <div
                                        key={mm.nid[0].value}
                                        className="text-center"
                                        style={{
                                            marginBottom: '5rem'
                                        }}
                                    >
                                        <p
                                            className="p-font text-secondary"
                                            style={{
                                                fontSize: '22px'
                                            }}
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                            dangerouslySetInnerHTML={{__html: mm.field_contact_address[0].value}}
                                        />
                                        <p
                                            className="p-font"
                                            style={{
                                                fontSize: '20px'
                                            }}
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                        >
                                            <span className="headTitle" style={{ fontWeight: '900' }}>Tel :</span>
                                            <a 
                                                href={`tel:${mm.field_contact_telephone[0].value}`} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-decoration-none text-dark"
                                            > (+95 1) 230 5133</a> ,
                                            <a 
                                                href={`tel:${mm.field_contact_telephone[1].value}`} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-decoration-none text-dark"
                                            > (+95 1) 230 5134</a>
                                        </p>
                                        <p
                                            className="p-font text-secondary"
                                            style={{
                                                fontSize: '20px'
                                            }}
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                        >
                                            <a
                                                href={mm.field_contact_website[0].uri}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-decoration-none"
                                                style={{
                                                    color: '#ffc107'
                                                }}
                                            >
                                                www.frontiertechnologypartners.com
                                            </a>
                                        </p>
                                    </div>
                                ) : (
                                    <div
                                        className="text-center"
                                        style={{
                                            marginBottom: '5rem'
                                        }}
                                    >
                                        <div 
                                            className="mb-4"
                                        >
                                            <Skeleton height={20} width={250} />
                                        </div>
                                        <div 
                                            className="mb-3"
                                        >
                                            <Skeleton width={310} />
                                        </div>
                                        <div 
                                            className="mb-3"
                                        >
                                            <Skeleton width={200} />
                                        </div>
                                        <div
                                        >
                                            <Skeleton width={200} />
                                        </div>
                                    </div>
                                )
                            }

                            {
                                sg ? (
                                    <div
                                        key={sg.nid[0].value}
                                        className="text-center"
                                        style={{
                                            paddingBottom: '4rem'
                                        }}
                                    >
                                        <h4
                                            className="headTitle mb-4 default-color"
                                            style={{
                                                letterSpacing: '0.5px'
                                            }}
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                        >
                                            {Parser(sg.title[0].value)}
                                        </h4>
                                        <p
                                            className="p-font text-secondary"
                                            style={{
                                                fontSize: '22px'
                                            }}
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                            dangerouslySetInnerHTML={{__html: sg.field_contact_address[0].value}}
                                        />
                                        <p
                                            className="p-font"
                                            style={{
                                                fontSize: '20px'
                                            }}
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                        >
                                            <span className="headTitle" style={{ fontWeight: '900' }}>Tel :</span>
                                            <a 
                                                href={`tel:${sg.field_contact_telephone[0].value}`} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-decoration-none text-dark"
                                            > (+65) 6671 9250</a>
                                        </p>
                                        <p
                                            className="p-font"
                                            style={{
                                                fontSize: '20px'
                                            }}
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                        >
                                            <span className="headTitle" style={{ fontWeight: '900' }}>Fax :</span>
                                            <a 
                                                href={`tel:${sg.field_contact_fax[0].value}`} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-decoration-none text-dark"
                                            > (+65) 6671 9251</a>
                                        </p>
                                    </div>
                                ) : (
                                    <div
                                        className="text-center"
                                        style={{
                                            paddingBottom: '4rem'
                                        }}
                                    >
                                        <div 
                                            className="mb-4"
                                        >
                                            <Skeleton height={30} width={250} />
                                        </div>
                                        <div 
                                            className="mb-3"
                                        >
                                            <Skeleton width={310} />
                                        </div>
                                        <div 
                                            className="mb-3"
                                        >
                                            <Skeleton width={200} />
                                        </div>
                                        <div
                                        >
                                            <Skeleton width={200} />
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>

                    <div
                        style={{
                            paddingTop: '4rem',
                            paddingBottom: '4rem'
                        }}
                    >
                        <div className="container">

                            <form
                                action="#"
                                className="col-12 col-lg-10 mx-auto"
                                id=""
                            >

                                <div className="row">
                                    <div className="col-12 col-md-6 py-3 py-md-0 p-font">
                                        <div className="field-group mb-4">
                                            <input
                                                type="text"
                                                id="firstname"
                                                name="firstname"
                                                placeholder="First name *"
                                                className="form-control rounded-0 px-3 py-4 text-capitalize"
                                                style={{
                                                    borderColor: '#1a7ec2'
                                                }}
                                                value={this.state.firstname}
                                                onChange={
                                                    e => this.setState({
                                                        firstname: e.target.value
                                                    })
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="field-group mb-4">
                                            <input
                                                type="text"
                                                id="lastname"
                                                name="lastname"
                                                placeholder="Last name *"
                                                className="form-control rounded-0 px-3 py-4 text-capitalize"
                                                style={{
                                                    borderColor: '#1a7ec2'
                                                }}
                                                value={this.state.lastname}
                                                onChange={
                                                    e => this.setState({
                                                        lastname: e.target.value
                                                    })
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="field-group mb-4">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Email *"
                                                className="form-control rounded-0 px-3 py-4"
                                                style={{
                                                    borderColor: '#1a7ec2'
                                                }}
                                                value={this.state.email}
                                                onChange={
                                                    e => this.setState({
                                                        email: e.target.value
                                                    })
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="field-group">
                                            <input
                                                type="text"
                                                id="phone"
                                                name="phone"
                                                placeholder="Phone number *"
                                                className="form-control rounded-0 px-3 py-4"
                                                style={{
                                                    borderColor: '#1a7ec2'
                                                }}
                                                value={this.state.phone}
                                                onChange={
                                                    e => this.setState({
                                                        phone: e.target.value
                                                    })
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 py-3 py-md-0 p-font">
                                        <div className="field-group h-100">
                                            <textarea
                                                rows="5"
                                                id="messages"
                                                name="messages"
                                                placeholder="Message *"
                                                className="form-control h-100 rounded-0 px-3 py-3"
                                                style={{
                                                    borderColor: '#1a7ec2'
                                                }}
                                                value={this.state.messages}
                                                onChange={
                                                    e => this.setState({
                                                        messages: e.target.value
                                                    })
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="field-group text-center mt-4">
                                            <button
                                                type="submit"
                                                className="px-3 py-2 rounded-0 text-dark text-capitalize headTitle bg-warning more-link"
                                                style={{
                                                    border: '1px solid #ffc107',
                                                    letterSpacing: '1px',
                                                    transition: '0.3s ease-in-out'
                                                }}
                                                onClick={e => this.handleFormSubmit(e)}
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
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
                                                        >FILL ALL :<br />First name, Last name<br />Email<br />Phone number<br />Message !</h2>
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

                </Layout>
            </Suspense>
        )
    }
}

const MailsentWrapper = styled.div`
    @media screen and (min-width: 992px) {
        left: 20%;
        bottom: 20%;
        right: 20%;
        top: 25%;
        background: rgba(230, 126, 34, 0.95);
        z-index: 9999;
    }
    @media screen and (max-width: 991px) {
        left: 30px;
        bottom: 30px;
        right: 30px;
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