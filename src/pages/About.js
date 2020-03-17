import React, { Component , Suspense } from 'react'
import Axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import { Helmet } from 'react-helmet'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import AOS from 'aos'
import {
    ABOUT_HEADER,
    ABOUT,
    TEAM,
    VISION,
    MISSION
} from '../Constants'
import LOGO from '../ftp_logo.png'


const Layout = React.lazy(() => import('../components/layout/Layout'))

export default class About extends Component {

    state = {
        post5 : null,
        post6 : null,
        post7 : null,
        post8 : null,
        post9 : null
    }

    fetchData5 = () => {
        Axios.get(ABOUT_HEADER)
            .then(res => {
                this.setState({
                    post5: res.data
                })
            })
    }

    fetchData6 = () => {
        Axios.get(ABOUT)
            .then(res => {
                this.setState({
                    post6: res.data
                })
            })
    }

    fetchData7 = () => {
        Axios.get(TEAM)
            .then(res => {
                this.setState({
                    post7: res.data
                })
            })
    }

    fetchData8 = () => {
        Axios.get(VISION)
            .then(res => {
                this.setState({
                    post8: res.data
                })
            })
    }

    fetchData9 = () => {
        Axios.get(MISSION)
            .then(res => {
                this.setState({
                    post9: res.data
                })
            })
    }


    componentDidMount() {
        this.fetchData5()
        this.fetchData6()
        this.fetchData7()
        this.fetchData8()
        this.fetchData9()
        window.scrollTo(0,0)
        AOS.init()
    }

    render() {
        const post5 = this.state.post5
        const post6 = this.state.post6
        const post7 = this.state.post7
        const post8 = this.state.post8
        const post9 = this.state.post9
        
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
                        post5 ? (
                            <div
                                key={post5.nid[0].value}
                            >
                                <Helmet
                                    title="About Us"
                                    meta={[
                                        {
                                            name: 'description',
                                            content: 'Frontier Technology Partners is providing business business solutions for new markets.'
                                        },
                                        {
                                            property: 'og:description',
                                            content: 'Frontier Technology Partners is providing business business solutions for new markets.'
                                        },
                                        { property: 'og:title', content: 'About Us - Frontier Technology Partners' },
                                        { property: 'og:url', content: `${window.location.href}` },
                                        { property: 'og:image', content: `${post5.field_page_headers_image[0].url}` },
                                        { property: 'twitter:image:src', content: `${post5.field_page_headers_image[0].url}` },
                                        { property: 'twitter:title', content: 'About Us - Frontier Technology Partners' },
                                        { property: 'twitter:description', content: 'Frontier Technology Partners is providing business business solutions for new markets.' }
                                    ]}
                                >
                                    <link rel="canonical" href={window.location.href} />
                                </Helmet>

                                <LazyLoadImage
                                    src={post5.field_page_headers_image[0].url}
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
                        <div 
                            className="container"
                        >
                            {
                                post6 ? (
                                    <div
                                        key={post6.nid[0].value}
                                    >
                                        <div className="row">
                                            <div className="col-12 col-md-6 pb-4 pb-md-0 pr-3 pr-md-5">
                                                <img
                                                    src={post6.field_about_image[0].url} 
                                                    alt={post6.title[0].value}
                                                    className="w-100"
                                                    style={{
                                                        objectFit: 'cover',
                                                        height: '50vh',
                                                        minHeight: '400px'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <h2
                                                    className="headTitle text-left mb-4 mt-3 mt-md-0 default-color"
                                                    style={{
                                                        letterSpacing: '0.5px'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    {post6.title[0].value}
                                                </h2>
                                                <p
                                                    dangerouslySetInnerHTML={{__html: post6.body[0].value}}
                                                    className="p-font h-100 mb-0 text-secondary"
                                                    style={{
                                                        fontSize: '22px',
                                                        lineHeight: '1.5em'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="row">
                                            <div 
                                                className="col-12 col-md-6 pb-4 pb-md-0 pr-3 pr-md-5"
                                            >
                                                <Skeleton height={400} />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div
                                                    style={{
                                                        lineHeight: '1.5em'
                                                    }}
                                                >
                                                    <div className="mb-3 mt-3 mt-md-0" >
                                                        <Skeleton height={20} width={150} />
                                                    </div>
                                                    <Skeleton count={12} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div
                        className="bg-white"
                        style={{
                            paddingTop: '4rem',
                            paddingBottom: '4rem'
                        }}
                    >
                        <div 
                            className="container"
                        >
                            {
                                post7 ? (
                                    <div
                                        key={post7.nid[0].value}
                                    >                                    
                                        <div className="row">
                                            <div className="col-12 col-md-6 pb-4 pb-md-0 order-md-2">
                                                <img
                                                    src={post7.field_about_image[0].url} 
                                                    alt={post7.title[0].value}
                                                    className="w-100"
                                                    style={{
                                                        objectFit: 'cover',
                                                        height: '50vh',
                                                        minHeight: '400px'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                />
                                            </div>
                                            <div className="col-12 col-md-6 pr-3 pr-md-5">
                                                <h2
                                                    className="headTitle mb-4 mt-3 mt-md-0 default-color"
                                                    style={{
                                                        letterSpacing: '0.5px'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    {post7.title[0].value}
                                                </h2>
                                                <p
                                                    dangerouslySetInnerHTML={{__html: post7.body[0].value}}
                                                    className="p-font h-100 mb-0 text-secondary p-ul"
                                                    style={{
                                                        fontSize: '22px',
                                                        lineHeight: '1.5em'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="row">
                                            <div 
                                                className="col-12 col-md-6 pb-4 pb-md-0 order-md-2"
                                            >
                                                <Skeleton height={400} />
                                            </div>
                                            <div className="col-12 col-md-6 pr-3 pr-md-5">
                                                <div
                                                    style={{
                                                        lineHeight: '1.5em'
                                                    }}
                                                >
                                                    <div className="mb-3 mt-3 mt-md-0" >
                                                        <Skeleton height={20} width={150} />
                                                    </div>
                                                    <Skeleton count={12} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div
                        className="bg-light"
                        style={{
                            paddingTop: '4rem',
                            paddingBottom: '4rem'
                        }}
                    >
                        <div 
                            className="container"
                        >
                            {
                                post8 ? (
                                    <div
                                        key={post8.nid[0].value}
                                    >
                                        <div className="row">
                                            <div className="col-12 col-md-6 pb-4 pb-md-0 pr-3 pr-md-5">
                                                <img
                                                    src={post8.field_about_image[0].url} 
                                                    alt={post8.title[0].value}
                                                    className="w-100"
                                                    style={{
                                                        objectFit: 'cover',
                                                        height: '50vh',
                                                        minHeight: '400px'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <h2
                                                    className="headTitle text-left mb-3 mt-3 mt-md-0 default-color"
                                                    style={{
                                                        letterSpacing: '0.5px'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    {post8.title[0].value}
                                                </h2>
                                                <p
                                                    dangerouslySetInnerHTML={{__html: post8.body[0].value}}
                                                    className="p-font h-100 mb-0 text-secondary p-ul"
                                                    style={{
                                                        fontSize: '22px',
                                                        lineHeight: '1.5em'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="row">
                                            <div 
                                                className="col-12 col-md-6 pb-4 pb-md-0 pr-3 pr-md-5"
                                            >
                                                <Skeleton height={400} />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div
                                                    style={{
                                                        lineHeight: '1.5em'
                                                    }}
                                                >
                                                    <div className="mb-3 mt-3 mt-md-0" >
                                                        <Skeleton height={20} width={150} />
                                                    </div>
                                                    <Skeleton count={12} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    
                    <div
                        className="bg-white"
                        style={{
                            paddingTop: '4rem',
                            paddingBottom: '4rem'
                        }}
                    >
                        <div 
                            className="container"
                        >
                            {
                                post9 ? (
                                    <div
                                        key={post9.nid[0].value}
                                    >
                                        <div className="row">
                                            <div className="col-12 col-md-6 pb-4 pb-md-0 order-md-2">
                                                <img
                                                    src={post9.field_about_image[0].url} 
                                                    alt={post9.title[0].value}
                                                    className="w-100"
                                                    style={{
                                                        objectFit: 'cover',
                                                        height: '50vh',
                                                        minHeight: '400px'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                />
                                            </div>
                                            <div className="col-12 col-md-6 pr-3 pr-md-5">
                                                <h2
                                                    className="headTitle mb-3 mt-3 mt-md-0 default-color"
                                                    style={{
                                                        letterSpacing: '0.5px'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    {post9.title[0].value}
                                                </h2>
                                                <p
                                                    dangerouslySetInnerHTML={{__html: post9.body[0].value}}
                                                    className="p-font h-100 mb-0 text-secondary p-ul"
                                                    style={{
                                                        fontSize: '22px',
                                                        lineHeight: '1.5em'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="row">
                                            <div 
                                                className="col-12 col-md-6 pb-4 pb-md-0 order-md-2"
                                            >
                                                <Skeleton height={400} />
                                            </div>
                                            <div className="col-12 col-md-6 pr-3 pr-md-5">
                                                <div
                                                    style={{
                                                        lineHeight: '1.5em'
                                                    }}
                                                >
                                                    <div className="mb-3 mt-3 mt-md-0" >
                                                        <Skeleton height={20} width={150} />
                                                    </div>
                                                    <Skeleton count={12} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </Layout>
            </Suspense>
        )
    }
}
