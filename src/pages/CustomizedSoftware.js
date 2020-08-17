import React, { Component , Suspense } from 'react'
import Helmet from 'react-helmet'
import Axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import Parser from 'html-react-parser'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import AOS from 'aos'
import {
    CUSTOM_SOFTWARE_HEADER,
    SERVICE_CSS
} from '../Constants'
import LOGO from '../ftp_logo.png'


const Layout = React.lazy(() => import('../components/layout/Layout'))


export default class CustomizedSoftware extends Component {

    state = {
        header: null,
        css: null
    }

    fetchHEADER = () => {
        Axios.get(CUSTOM_SOFTWARE_HEADER)
            .then(res => {
                this.setState({
                    header: res.data
                })
            })
            .catch(err => err)
    }

    fetchCSS = () => {
        Axios.get(SERVICE_CSS)
            .then(res => {
                this.setState({
                    css: res.data
                })
            })
            .catch(err => err)
    }

    componentDidMount() {
        this.fetchHEADER()
        this.fetchCSS()
        window.scrollTo(0,0)
        AOS.init()
    }

    render() {
        const header = this.state.header
        const service = this.state.css

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
                                    title="Customized Software Solutions"
                                    meta={[
                                        {
                                            name: 'description',
                                            content: 'We design and build applications that optimize or elegantly transform your internal business processes by streamlining operations, improving their transparency, driving employees’ efficiency, enhancing interdepartmental communication and improving reporting and planning. '
                                        },
                                        {
                                            property: 'og:description',
                                            content: 'We design and build applications that optimize or elegantly transform your internal business processes by streamlining operations, improving their transparency, driving employees’ efficiency, enhancing interdepartmental communication and improving reporting and planning. '
                                        },
                                        { property: 'og:title', content: 'Customized Software Solutions - Frontier Technology Partners' },
                                        { property: 'og:url', content: `${window.location.href}` },
                                        { property: 'og:image', content: `${header.field_page_headers_image[0].url}` },
                                        { property: 'twitter:image:src', content: `${header.field_page_headers_image[0].url}` },
                                        { property: 'twitter:title', content: 'Customized Software Solutions - Frontier Technology Partners' },
                                        { property: 'twitter:description', content: 'We design and build applications that optimize or elegantly transform your internal business processes by streamlining operations, improving their transparency, driving employees’ efficiency, enhancing interdepartmental communication and improving reporting and planning. ' }
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
                                        objectFit: 'cover'
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

                    {
                        service ? (
                            <div key={service.nid[0].value}>
                                <div
                                    className="bg-light"
                                    style={{
                                        paddingTop: '4rem',
                                        paddingBottom: '3rem'
                                    }}
                                >
                                    <div 
                                        className="container"
                                    >
                                        <div 
                                            className="col-12 col-lg-10 px-0"
                                        >
                                            <h2
                                                className="headTitle mb-4 default-color"
                                                style={{
                                                    letterSpacing: '0.5px',
                                                    lineHeight: '1.5em'
                                                }}
                                                data-aos={"fade-up"}
                                                data-aos-duration={"2000"}
                                            >
                                                {Parser(service.field_os_title_1[0].value)}
                                            </h2>
                                            <p
                                                dangerouslySetInnerHTML={{__html: service.field_os_detail_1[0].value}}
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

                                <div
                                    className="bg-white"
                                    style={{
                                        paddingTop: '4rem',
                                        paddingBottom: '3rem'
                                    }}
                                >
                                    <div 
                                        className="container"
                                    >
                                        <div 
                                            className="col-12 col-lg-10 px-0"
                                        >
                                            <h2
                                                className="headTitle mb-4 default-color"
                                                style={{
                                                    letterSpacing: '0.5px',
                                                    lineHeight: '1.5em'
                                                }}
                                                data-aos={"fade-up"}
                                                data-aos-duration={"2000"}
                                            >
                                                {Parser(service.field_os_title_2[0].value)}
                                            </h2>
                                            <p
                                                dangerouslySetInnerHTML={{__html: service.field_os_detail_2[0].value}}
                                                className="p-font h-100 mb-0 text-secondary c-ul"
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
                            </div>
                        ) : (
                            <>
                                <div
                                    className="bg-light"
                                    style={{
                                        paddingTop: '4rem',
                                        paddingBottom: '3rem'
                                    }}
                                >
                                    <div 
                                        className="container"
                                    >
                                        <div 
                                            className="col-12 col-lg-10 px-0"
                                        >
                                            <div 
                                                className="mb-4"
                                            >
                                                <Skeleton height={30} />
                                            </div>
                                            <div 
                                                style={{ 
                                                    lineHeight: '2em' 
                                                }}
                                            >
                                                {
                                                    Array(9).fill().map((item,index) => (
                                                        <div className="mb-2" key={index}>
                                                            <Skeleton height={20} />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="bg-white"
                                    style={{
                                        paddingTop: '4rem',
                                        paddingBottom: '3rem'
                                    }}
                                >
                                    <div 
                                        className="container"
                                    >
                                        <div 
                                            className="col-12 col-lg-10 px-0"
                                        >
                                            <div 
                                                className="mb-4"
                                            >
                                                <Skeleton height={30} />
                                            </div>
                                            <div 
                                                style={{ 
                                                    lineHeight: '2em' 
                                                }}
                                            >
                                                {
                                                    Array(9).fill().map((item,index) => (
                                                        <div className="mb-2" key={index}>
                                                            <Skeleton height={20} />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                            <div className="row">
                                <div className="col-12 col-md-4 py-4 py-md-0">
                                    {
                                        service ? (
                                            <div
                                                key={service.nid[0].value}
                                                className="bg-warning h-100 shadow-lg rounded p-5"
                                                data-aos={"fade-up"}
                                                data-aos-duration={"2000"}
                                            >
                                                <h2
                                                    className="headTitle mb-4"
                                                    style={{
                                                        letterSpacing: '1px',
                                                        color: '#000',
                                                        fontSize: '24px',
                                                        lineHeight: '1.5em'
                                                    }}
                                                >
                                                    {Parser(service.field_os_others_title_1[0].value)}
                                                </h2>
                                                <p
                                                    dangerouslySetInnerHTML={{__html: service.field_os_others_description_1[0].value}}
                                                    className="p-font h-100 mb-0 text-dark"
                                                    style={{
                                                        fontSize: '15px',
                                                        letterSpacing: '0.5px',
                                                        lineHeight: '1.7em'
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <div
                                                className="bg-warning h-100 shadow-lg rounded p-5"
                                            >
                                                <div className="mb-4">
                                                    <Skeleton height={20} />
                                                </div>
                                                <div
                                                    style={{
                                                        lineHeight: '2em'
                                                    }}
                                                >
                                                    {
                                                    Array(4).fill().map((item,index) => (
                                                        <div className="mb-2" key={index}>
                                                            <Skeleton height={20} />
                                                        </div>
                                                    ))
                                                }
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="col-12 col-md-4 py-4 py-md-0">
                                    {
                                        service ? (
                                            <div
                                                key={service.nid[0].value}
                                                className="bg-warning h-100 shadow-lg rounded p-5"
                                                data-aos={"fade-up"}
                                                data-aos-duration={"2000"}
                                            >
                                                <h2
                                                    className="headTitle mb-4"
                                                    style={{
                                                        letterSpacing: '1px',
                                                        color: '#000',
                                                        fontSize: '24px',
                                                        lineHeight: '1.5em'
                                                    }}
                                                >
                                                    {Parser(service.field_os_others_title_2[0].value)}
                                                </h2>
                                                <p
                                                    dangerouslySetInnerHTML={{__html: service.field_os_others_description_2[0].value}}
                                                    className="p-font h-100 mb-0 text-dark"
                                                    style={{
                                                        fontSize: '15px',
                                                        letterSpacing: '0.5px',
                                                        lineHeight: '1.7em'
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <div
                                                className="bg-warning h-100 shadow-lg rounded p-5"
                                            >
                                                <div className="mb-4">
                                                    <Skeleton height={20} />
                                                </div>
                                                <div
                                                    style={{
                                                        lineHeight: '2em'
                                                    }}
                                                >
                                                    {
                                                        Array(4).fill().map((item,index) => (
                                                            <div className="mb-2" key={index}>
                                                                <Skeleton height={20} />
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="col-12 col-md-4 py-4 py-md-0">
                                    {
                                        service ? (
                                            <div
                                                key={service.nid[0].value}
                                                className="bg-warning h-100 shadow-lg rounded p-5"
                                                data-aos={"fade-up"}
                                                data-aos-duration={"2000"}
                                            >
                                                <h2
                                                    className="headTitle mb-4"
                                                    style={{
                                                        letterSpacing: '1px',
                                                        color: '#000',
                                                        fontSize: '24px',
                                                        lineHeight: '1.5em'
                                                    }}
                                                >
                                                    {Parser(service.field_os_others_title_3[0].value)}
                                                </h2>
                                                <p
                                                    dangerouslySetInnerHTML={{__html: service.field_os_others_description_3[0].value}}
                                                    className="p-font h-100 mb-0 text-dark"
                                                    style={{
                                                        fontSize: '15px',
                                                        letterSpacing: '0.5px',
                                                        lineHeight: '1.7em'
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <div
                                                className="bg-warning h-100 shadow-lg rounded p-5"
                                            >
                                                <div className="mb-4">
                                                    <Skeleton height={20} />
                                                </div>
                                                <div
                                                    style={{
                                                        lineHeight: '2em'
                                                    }}
                                                >
                                                    {
                                                        Array(4).fill().map((item,index) => (
                                                            <div className="mb-2" key={index}>
                                                                <Skeleton height={20} />
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>

                        </div>
                    </div>

                </Layout>
            </Suspense>
        )
    }
}
