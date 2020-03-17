import React, { Component , Suspense } from 'react'
import Axios from 'axios'
import { Helmet } from 'react-helmet'
import Skeleton from 'react-loading-skeleton'
import Parser from 'html-react-parser'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import AOS from 'aos'
import styled from 'styled-components'
import { 
    ENQUIRY_HEADER
} from '../Constants'
import LOGO from '../ftp_logo.png'


const Layout = React.lazy(() => import('../components/layout/Layout'))



const API_FORM_URL = '/api/enquiry.php'

export default class Enquiry extends Component {

    state = {
        products: [],
        header: null,
        inventory_system: '',
        ecommerce_system: '',
        erp_system: '',
        hr_system: '',
        core_banking_system: '',
        web_design_system: '',
        company_name: '',
        company_type: '',
        company_size: '',
        customer_name: '',
        contact_email: '',
        contact_phone: '',
        contact_address: '',
        message: '',
        mailSent: false,
        error: null
    }

    resetForm = () => {
        this.setState({
            inventory_system: '',
            ecommerce_system: '',
            erp_system: '',
            hr_system: '',
            core_banking_system: '',
            web_design_system: '',
            company_name: '',
            company_type: '',
            company_size: '',
            customer_name: '',
            contact_email: '',
            contact_phone: '',
            contact_address: '',
            message: '',
            mailSent: false,
            error: null
        })
    }

    fetchENQUIRY = () => {
        Axios.get(ENQUIRY_HEADER)
            .then(res => {
                this.setState({
                    header: res.data
                })
            })
    }

    componentDidMount() {
        this.fetchENQUIRY()
        AOS.init()
        window.scrollTo(0,0)
    }

    handleFormSubmit = e => {
        e.preventDefault()
        Axios({
            method: 'post',
            url: `${API_FORM_URL}`,
            headers: { 'content-type' : 'application/json' },
            data: this.state
        })
        .then(result => {
            this.setState({
                mailSent: result.data.sent
            })
            console.log(result)
        })
        .catch(error => {
            this.setState({
                error: error.message
            })
        })
    }

    render() {
        const header = this.state.header

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
                                    title="Enquiry"
                                    meta={[
                                        {
                                            name: 'description',
                                            content: 'Please send message in our equiry.'
                                        },
                                        {
                                            property: 'og:description',
                                            content: 'Please send message in our equiry.'
                                        },
                                        { property: 'og:title', content: 'Enquiry - Frontier Technology Partners' },
                                        { property: 'og:url', content: `${window.location.href}` },
                                        { property: 'og:image', content: `${header.field_page_headers_image[0].url}` },
                                        { property: 'twitter:image:src', content: `${header.field_page_headers_image[0].url}` },
                                        { property: 'twitter:title', content: 'Enquiry - Frontier Technology Partners' },
                                        { property: 'twitter:description', content: 'Please send message in our equiry.' }
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
                                        className="headTitle default-color text-uppercase text-left mb-0 pb-4"
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
                                        className="pb-5"
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
                        style={{
                            paddingBottom: '4rem'
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <form
                                    action="#"
                                    className="w-100"
                                    onSubmit={this.handleFormSubmit}
                                    
                                >
                                    <div className="field-group mb-4">
                                        <div className="px-3">
                                            <div className="row">
                                                <div 
                                                    className="custom-control custom-checkbox col-12 col-sm-6 col-lg-4 py-3"
                                                >
                                                    <input 
                                                        type="checkbox" 
                                                        className="custom-control-input position-relative bg-light" 
                                                        id="inventory_system"
                                                        name="inventory_system"
                                                        value="Inventory System"
                                                        onChange={
                                                        (e) => {
                                                            if(!this.state.inventory_system) {
                                                                this.setState({
                                                                    inventory_system: e.target.value
                                                                })
                                                            } else {
                                                                    this.setState({
                                                                        inventory_system: ''
                                                                    })
                                                                }
                                                            }
                                                        }
                                                    />
                                                    <label 
                                                        className="custom-control-label headTitle text-dark pl-3 cu-input-checkbox" 
                                                        htmlFor="inventory_system" 
                                                        style={{
                                                            fontSize: '18px',
                                                            letterSpacing: '0.5px'
                                                        }}
                                                    >   
                                                        Inventory System
                                                    </label>
                                                </div>

                                                <div 
                                                    className="custom-control custom-checkbox col-12 col-sm-6 col-lg-4 py-3"
                                                >
                                                    <input 
                                                        type="checkbox" 
                                                        className="custom-control-input position-relative bg-light" 
                                                        id="ecommerce_system"
                                                        name="ecommerce_system"
                                                        value="Ecommerce System"
                                                        onChange={
                                                            (e) => {
                                                                if(!this.state.ecommerce_system) {
                                                                    this.setState({
                                                                        ecommerce_system: e.target.value
                                                                    })
                                                                } else {
                                                                    this.setState({
                                                                        ecommerce_system: ''
                                                                    })
                                                                }
                                                            }
                                                        }
                                                    />
                                                    <label 
                                                        className="custom-control-label headTitle text-dark pl-3 cu-input-checkbox" 
                                                        htmlFor="ecommerce_system" 
                                                        style={{
                                                            fontSize: '18px',
                                                            letterSpacing: '0.5px'
                                                        }}
                                                    >   
                                                        Ecommerce System
                                                    </label>
                                                </div>

                                                <div 
                                                    className="custom-control custom-checkbox col-12 col-sm-6 col-lg-4 py-3"
                                                >
                                                    <input 
                                                        type="checkbox" 
                                                        className="custom-control-input position-relative bg-light" 
                                                        id="erp_system"
                                                        name="erp_system"
                                                        value="ERP System"
                                                        onChange={
                                                            (e) => {
                                                                if(!this.state.erp_system) {
                                                                    this.setState({
                                                                        erp_system: e.target.value
                                                                    })
                                                                } else {
                                                                    this.setState({
                                                                        erp_system: ''
                                                                    })
                                                                }
                                                            }
                                                        }
                                                    />
                                                    <label 
                                                        className="custom-control-label headTitle text-dark pl-3 cu-input-checkbox" 
                                                        htmlFor="erp_system" 
                                                        style={{
                                                            fontSize: '18px',
                                                            letterSpacing: '0.5px'
                                                        }}
                                                    >   
                                                        ERP System
                                                    </label>
                                                </div>

                                                <div 
                                                    className="custom-control custom-checkbox col-12 col-sm-6 col-lg-4 py-3"
                                                >
                                                    <input 
                                                        type="checkbox" 
                                                        className="custom-control-input position-relative bg-light" 
                                                        id="hr_system"
                                                        name="hr_system"
                                                        value="HR System"
                                                        onChange={
                                                            (e) => {
                                                                if(!this.state.hr_system) {
                                                                    this.setState({
                                                                        hr_system: e.target.value
                                                                    })
                                                                } else {
                                                                    this.setState({
                                                                        hr_system: ''
                                                                    })
                                                                }
                                                            }
                                                        }
                                                    />
                                                    <label 
                                                        className="custom-control-label headTitle text-dark pl-3 cu-input-checkbox" 
                                                        htmlFor="hr_system" 
                                                        style={{
                                                            fontSize: '18px',
                                                            letterSpacing: '0.5px'
                                                        }}
                                                    >   
                                                        HR System
                                                    </label>
                                                </div>

                                                <div 
                                                    className="custom-control custom-checkbox col-12 col-sm-6 col-lg-4 py-3"
                                                >
                                                    <input 
                                                        type="checkbox" 
                                                        className="custom-control-input position-relative bg-light" 
                                                        id="core_banking_system"
                                                        name="core_banking_system"
                                                        value="Core Banking System"
                                                        onChange={
                                                            (e) => {
                                                                if(!this.state.core_banking_system) {
                                                                    this.setState({
                                                                        core_banking_system: e.target.value
                                                                    })
                                                                } else {
                                                                    this.setState({
                                                                        core_banking_system: ''
                                                                    })
                                                                }
                                                            }
                                                        }
                                                    />
                                                    <label 
                                                        className="custom-control-label headTitle text-dark pl-3 cu-input-checkbox" 
                                                        htmlFor="core_banking_system" 
                                                        style={{
                                                            fontSize: '18px',
                                                            letterSpacing: '0.5px'
                                                        }}
                                                    >   
                                                        Core Banking System
                                                    </label>
                                                </div>

                                                <div 
                                                    className="custom-control custom-checkbox col-12 col-sm-6 col-lg-4 py-3"
                                                >
                                                    <input 
                                                        type="checkbox" 
                                                        className="custom-control-input position-relative bg-light" 
                                                        id="web_design_system"
                                                        name="web_design_system"
                                                        value="Web Design"
                                                        onChange={
                                                            (e) => {
                                                                if(!this.state.web_design_system) {
                                                                    this.setState({
                                                                        web_design_system: e.target.value
                                                                    })
                                                                } else {
                                                                    this.setState({
                                                                        web_design_system: ''
                                                                    })
                                                                }
                                                            }
                                                        }
                                                    />
                                                    <label 
                                                        className="custom-control-label headTitle text-dark pl-3 cu-input-checkbox" 
                                                        htmlFor="web_design_system" 
                                                        style={{
                                                            fontSize: '18px',
                                                            letterSpacing: '0.5px'
                                                        }}
                                                    >   
                                                        Web Design
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="field-group">
                                        <div className="d-flex flex-column flex-md-row">                                    
                                            <div className="col-12 col-md-6 py-3">
                                                <span
                                                    className="position-absolute text-secondary"
                                                    style={{
                                                        left: '2rem',
                                                        top: '1.9rem'
                                                    }}
                                                >
                                                    <i className="far fa-building"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="Company Name"
                                                    className="form-control rounded-0 bg-transparent px-3 pl-5 pl-5 p-font"
                                                    style={{
                                                        height: '3em',
                                                        borderColor: '#1a7ec2',
                                                        fontSize: '18px'
                                                    }}
                                                    name="company_name"
                                                    id="company_name"
                                                    value={this.state.company_name}
                                                    onChange={
                                                        e => this.setState({ company_name: e.target.value })
                                                    }
                                                />
                                            </div>
                                            <div className="col-12 col-md-6 py-3">
                                                <span
                                                    className="position-absolute text-secondary"
                                                    style={{
                                                        left: '2rem',
                                                        top: '1.9rem'
                                                    }}
                                                >
                                                    <i className="fas fa-briefcase"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="Company Type"
                                                    className="form-control rounded-0 bg-transparent px-3 pl-5 p-font"
                                                    style={{
                                                        height: '3em',
                                                        borderColor: '#1a7ec2',
                                                        fontSize: '18px'
                                                    }}
                                                    name="company_type"
                                                    id="company_type"
                                                    value={this.state.company_type}
                                                    onChange={
                                                        e => this.setState({ company_type: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="field-group">
                                        <div className="d-flex flex-column flex-md-row">                                    
                                            <div className="col-12 col-md-6 py-3">
                                                <span
                                                    className="position-absolute text-secondary"
                                                    style={{
                                                        left: '2rem',
                                                        top: '1.9rem'
                                                    }}
                                                >
                                                    <i className="fas fa-users"></i>
                                                </span>
                                                <select 
                                                    className="custom-select rounded-0 bg-transparent px-3 pl-5 p-font"
                                                    style={{
                                                        height: '3em',
                                                        borderColor: '#1a7ec2',
                                                        fontSize: '18px'
                                                    }}
                                                    name="company_size"
                                                    id="company_size"
                                                    value={this.state.company_size}
                                                    onChange={
                                                        e => this.setState({ company_size: e.target.value })
                                                    }
                                                >
                                                    <option value="No select size">Company Size</option>
                                                    <option value="Under 10">Under 10</option>
                                                    <option value="10 - 50">10 - 50</option>
                                                    <option value="51 - 100">51 - 100</option>
                                                    <option value="101 - 150">101 - 150</option>
                                                    <option value="Above 150">Above 150</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-md-6 py-3">
                                                <span
                                                    className="position-absolute text-secondary"
                                                    style={{
                                                        left: '2rem',
                                                        top: '1.9rem'
                                                    }}
                                                >
                                                    <i className="fas fa-user-tie"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="Customer Name"
                                                    className="form-control rounded-0 bg-transparent px-3 pl-5 p-font"
                                                    style={{
                                                        height: '3em',
                                                        borderColor: '#1a7ec2',
                                                        fontSize: '18px'
                                                    }}
                                                    name="customer_name"
                                                    id="customer_name"
                                                    value={this.state.customer_name}
                                                    onChange={
                                                        e => this.setState({ customer_name: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="field-group">
                                        <div className="d-flex flex-column flex-md-row">                                    
                                            <div className="col-12 col-md-6 py-3">
                                                <span
                                                    className="position-absolute text-secondary"
                                                    style={{
                                                        left: '2rem',
                                                        top: '1.9rem'
                                                    }}
                                                >
                                                    <i className="far fa-envelope"></i>
                                                </span>
                                                <input
                                                    type="email"
                                                    placeholder="Contact Email"
                                                    className="form-control rounded-0 bg-transparent px-3 pl-5 p-font"
                                                    style={{
                                                        height: '3em',
                                                        borderColor: '#1a7ec2',
                                                        fontSize: '18px'
                                                    }}
                                                    name="contact_email"
                                                    id="contact_email"
                                                    value={this.state.contact_email}
                                                    onChange={
                                                        e => this.setState({ contact_email: e.target.value })
                                                    }
                                                />
                                            </div>
                                            <div className="col-12 col-md-6 py-3">
                                                <span
                                                    className="position-absolute text-secondary"
                                                    style={{
                                                        left: '2rem',
                                                        top: '1.9rem'
                                                    }}
                                                >
                                                    <i className="fas fa-mobile-alt"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="Contact Phone"
                                                    className="form-control rounded-0 bg-transparent px-3 pl-5 p-font"
                                                    style={{
                                                        height: '3em',
                                                        borderColor: '#1a7ec2',
                                                        fontSize: '18px'
                                                    }}
                                                    name="contact_phone"
                                                    id="contact_phone"
                                                    value={this.state.contact_phone}
                                                    onChange={
                                                        e => this.setState({ contact_phone: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="field-group">
                                        <div className="d-flex flex-column flex-md-row">                                    
                                            <div className="col-12 col-md-6 py-3">
                                                <span
                                                    className="position-absolute text-secondary"
                                                    style={{
                                                        left: '2rem',
                                                        top: '2rem'
                                                    }}
                                                >
                                                    <i className="far fa-map"></i>
                                                </span>
                                                <textarea
                                                    rows="5"
                                                    placeholder="Contact Address"
                                                    className="form-control rounded-0 bg-transparent px-3 pl-5 p-font py-3"
                                                    style={{
                                                        borderColor: '#1a7ec2',
                                                        fontSize: '18px'
                                                    }}
                                                    name="contact_address"
                                                    id="contact_address"
                                                    value={this.state.contact_address}
                                                    onChange={
                                                        e => this.setState({ contact_address: e.target.value })
                                                    }
                                                />
                                            </div>
                                            <div className="col-12 col-md-6 py-3">
                                                <span
                                                    className="position-absolute text-secondary"
                                                    style={{
                                                        left: '2rem',
                                                        top: '2rem'
                                                    }}
                                                >
                                                    <i className="far fa-comment"></i>
                                                </span>
                                                <textarea
                                                    rows="5"
                                                    placeholder="Message"
                                                    className="form-control rounded-0 bg-transparent px-3 pl-5 p-font py-3"
                                                    style={{
                                                        borderColor: '#1a7ec2',
                                                        fontSize: '18px'
                                                    }}
                                                    name="message"
                                                    id="message"
                                                    value={this.state.message}
                                                    onChange={
                                                        e => this.setState({ message: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="field-group text-center mt-4">
                                        <button
                                            type="submit"
                                            className="px-3 py-2 rounded-0 text-dark text-capitalize headTitle bg-warning more-link"
                                            style={{
                                                border: '1px solid #ffc107',
                                                letterSpacing: '1px',
                                                transition: '0.3s ease-in-out'
                                            }}
                                            
                                        >
                                            Send Message
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
                                                            >
                                                                FILL ALL :<br />
                                                                Company Name, Company Type,<br />
                                                                Company Size, Customer Name,<br />
                                                                Contact Email, Contact Phone,<br />
                                                                Contact Address, Message !
                                                            </h2>
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
        top: 20%;
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