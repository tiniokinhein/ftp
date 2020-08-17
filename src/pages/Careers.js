import React, { Component , Suspense } from 'react'
import Helmet from 'react-helmet'
import Skeleton from 'react-loading-skeleton'
import Axios from 'axios'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import Parser from 'html-react-parser'
import styled from 'styled-components'
import AOS from 'aos'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import {
    CAREER_HEADER,
    CAREERS,
    POSITIONS
} from '../Constants'
import LOGO from '../ftp_logo.png'


const Layout = React.lazy(() => import('../components/layout/Layout'))


const API_CAREER_FORM = '/api/career-form.php'

export default class Careers extends Component {

    state = {
        header: null,
        posts: [],
        positions: [],
        position: '',
        name: '',
        email: '',
        phone: '',
        upfile: '',
        mailSent: false,
        error: null
    }

    fetchHEADER = () => {
        Axios.get(CAREER_HEADER)
            .then(res => {
                this.setState({
                    header: res.data
                })
            })
            .catch(err => err)
    }

    fetchPOSTS = () => {
        Axios.get(CAREERS)
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => err)
    }

    fetchPOSITIONS = () => {
        Axios.get(POSITIONS)
            .then(res => {
                this.setState({
                    positions: res.data
                })
            })
            .catch(err => err)
    }

    resetForm = () => {
        this.setState({
            position: '',
            name: '',
            email: '',
            phone: '',
            upfile: '',
            mailSent: false,
            error: null
        })
    }

    componentDidMount() {
        this.fetchHEADER()
        this.fetchPOSTS()
        this.fetchPOSITIONS()
        window.scrollTo(0,0)
        AOS.init()
    }

    handleFormSubmit = e => {
        e.preventDefault()
        Axios({
            method: 'post',
            url: `${API_CAREER_FORM}`,
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
        const posts = this.state.posts
        const positions = this.state.positions


        const postLists = posts.length ? (
            <Accordion 
                allowZeroExpanded="true"
                allowMultipleExpanded="true"
                preExpanded={[posts[0].uuid[0].value]}
                className="border-0"
            >
                {
                    posts.map((post) => (
                        <AccordionItem
                            key={post.nid[0].value}
                            uuid={post.uuid[0].value}
                            className="accordion__item border-0 mb-4 shadow-sm"
                            data-aos={"fade-up"}
                            data-aos-duration={"2000"}
                        >

                            <AccordionItemHeading>
                                <AccordionItemButton
                                    className="accordion__button px-4 py-2"
                                    style={{
                                        background: '#1a7ec2'
                                    }}
                                >
                                    <h2
                                        className="p-font text-white text-uppercase mb-0"
                                        style={{
                                            letterSpacing: '0.5px',
                                            fontSize: '20px',
                                            lineHeight: '1.6em'
                                        }}
                                    >
                                        {Parser(post.title[0].value)} - {Parser(post.field_career_sex[0].value)} - {Parser(post.field_career_post[0].value)}
                                    </h2>
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel
                                className="accordion__panel p-4 bg-white"
                            >
                                <div
                                    className="mb-5"
                                >
                                    <h3
                                        className="headTitle text-uppercase text-dark mb-3"
                                        style={{
                                            letterSpacing: '1px',
                                            fontWeight: '900',
                                            fontSize: '16px'
                                        }}
                                    >Job Description</h3>
                                    <p
                                        className="p-font text-secondary p-ul"
                                        style={{
                                            fontSize: '16px'
                                        }}
                                        dangerouslySetInnerHTML={{__html: post.field_career_job_description[0].value}}
                                    />
                                </div>
                                <div
                                    className="mb-5"
                                >
                                    <h3
                                        className="headTitle text-uppercase text-dark mb-3"
                                        style={{
                                            letterSpacing: '1px',
                                            fontWeight: '900',
                                            fontSize: '16px'
                                        }}
                                    >Desired Skills and Expertise</h3>
                                    <p
                                        className="p-font text-secondary p-ul"
                                        style={{
                                            fontSize: '16px'
                                        }}
                                        dangerouslySetInnerHTML={{__html: post.field_career_skills[0].value}}
                                    />
                                </div>
                                <div
                                    className="mb-5"
                                >
                                    <h3
                                        className="headTitle text-uppercase text-dark mb-3"
                                        style={{
                                            letterSpacing: '1px',
                                            fontWeight: '900',
                                            fontSize: '16px'
                                        }}
                                    >Personal Attributes</h3>
                                    <p
                                        className="p-font text-secondary p-ul"
                                        style={{
                                            fontSize: '16px'
                                        }}
                                        dangerouslySetInnerHTML={{__html: post.field_career_personal_attributes[0].value}}
                                    />
                                </div>
                            </AccordionItemPanel>

                        </AccordionItem>
                    ))
                }
            </Accordion>
        ) : (
            <>
                <div 
                    className="mb-4" 
                >
                    <Skeleton height={64} />
                </div>
                <div 
                    className="mb-4" 
                >
                    <Skeleton height={64} />
                </div>
                <div 
                    className="mb-4" 
                >
                    <Skeleton height={64} />
                </div>
                <div 
                    className="mb-4" 
                >
                    <Skeleton height={64} />
                </div>
                <div 
                    className="mb-4" 
                >
                    <Skeleton height={64} />
                </div>
                <div 
                    className="mb-4" 
                >
                    <Skeleton height={64} />
                </div>
            </>
        )

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
                            >
                                <Helmet 
                                    title="Careers"
                                    meta={[
                                        {
                                            name: 'description',
                                            content: 'Careers available'
                                        },
                                        {
                                            property: 'og:description',
                                            content: 'Careers available'
                                        },
                                        { property: 'og:title', content: 'Careers - Frontier Technology Partners' },
                                        { property: 'og:url', content: `${window.location.href}` },
                                        { property: 'og:image', content: `${header.field_page_headers_image[0].url}` },
                                        { property: 'twitter:image:src', content: `${header.field_page_headers_image[0].url}` },
                                        { property: 'twitter:title', content: 'Careers - Frontier Technology Partners' },
                                        { property: 'twitter:description', content: 'Careers available' }
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
                            </div>
                        ) : (
                            <>
                                <Skeleton height={330} />
                            </>
                        )
                    }

                    <div
                        className="bg-light"
                        style={{
                            paddingTop: '4rem',
                            paddingBottom: '4rem'
                        }}
                    >
                        <div className="container">
                            <h2
                                className="headTitle default-color text-uppercase mb-4"
                                style={{
                                    letterSpacing: '1px'
                                }}
                            >
                                Careers Available
                            </h2>

                            <div className="row">
                            
                                <div className="col-12 col-lg-8 py-3 py-lg-0">
                                    {postLists}
                                </div>

                                <div className="col-12 col-lg-4 py-3 py-lg-0">
                                    <form
                                        action="#"
                                        id=""
                                        className="bg-white shadow-sm p-4"
                                    >
                                        <h2
                                            className="bold-header text-uppercase text-secondary mb-4"
                                            style={{
                                                fontSize: '20px',
                                                fontWeight: '300'
                                            }}
                                        >
                                            Apply Now
                                        </h2>
                                        <div className="field-group mb-3">
                                            <select
                                                id="position"
                                                name="position"
                                                className="form-control rounded-0 text-dark p-font"
                                                style={{
                                                    borderColor: '#eaeaea'
                                                }}
                                                value={this.state.position}
                                                onChange={
                                                    e => this.setState({
                                                        position: e.target.value
                                                    })
                                                }
                                                required
                                            >
                                                <option value="No Position">Position</option>
                                                {
                                                    positions.map((position) => (
                                                        <option
                                                            key={position.uuid}
                                                            value={position.name}
                                                        >
                                                            {Parser(position.name)}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="field-group mb-3">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Name"
                                                className="form-control rounded-0 text-dark text-capitalize p-font"
                                                style={{
                                                    borderColor: '#eaeaea'
                                                }}
                                                value={this.state.name}
                                                onChange={
                                                    e => this.setState({
                                                        name: e.target.value
                                                    })
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="field-group mb-3">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Email"
                                                className="form-control rounded-0 text-dark text-capitalize p-font"
                                                style={{
                                                    borderColor: '#eaeaea'
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
                                        <div className="field-group mb-3">
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                placeholder="Phone"
                                                className="form-control rounded-0 text-dark text-capitalize p-font"
                                                style={{
                                                    borderColor: '#eaeaea'
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
                                        <div className="field-group mb-3">
                                            <div className="custom-file">
                                                <input  
                                                    type="file"
                                                    name="upfile"
                                                    id="upfile"
                                                    className="custom-file-input rounded-0 text-dark p-font"
                                                    style={{
                                                        borderColor: '#eaeaea'
                                                    }}
                                                    value={this.state.upfile}
                                                    onChange={
                                                        e => this.setState({
                                                            upfile: e.target.value
                                                        })
                                                    }
                                                    required
                                                />
                                                <label 
                                                    className="custom-file-label rounded-0 text-dark p-font" 
                                                    style={{
                                                        borderColor: '#eaeaea'
                                                    }}
                                                >No File Uploaded</label>
                                                <p
                                                    className="p-font mt-1 text-danger"
                                                    style={{
                                                        fontSize: '12px'
                                                    }}
                                                >
                                                    File Extensions -  PDF or DOC
                                                </p>
                                            </div>
                                        </div>
                                        <div className="field-group">
                                            <button
                                                type="submit"
                                                onClick={e => this.handleFormSubmit(e)}
                                                className="more-link w-100 headTitle py-2 text-capitalize text-dark rounded-0"
                                                style={{
                                                    background: '#ffc107',
                                                    border: '1px solid #ffc107',
                                                    fontSize: '18px',
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
                                                                background: '#fff',
                                                                transform: 'rotate(45deg)'
                                                            }}
                                                        />
                                                        <span
                                                            className="d-block position-relative"
                                                            style={{
                                                                width: '30px',
                                                                height: '2px',
                                                                marginTop: '-2px',
                                                                background: '#fff',
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
                                                                        color: '#fff'
                                                                    }}
                                                                >Thank you</h2>
                                                                <p
                                                                    className="p-font font-12 text-white-50 mb-0 font-italic"
                                                                    style={{
                                                                        letterSpacing: '0.5px'
                                                                    }}
                                                                >
                                                                    Your message has been sent.
                                                                </p>
                                                                <p
                                                                    className="headTitle text-white mt-4"
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
                                                                >FILL ALL :<br />Choose Position<br />Name<br />Email<br />Phone<br />Upload File !</h2>
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