import React, { Component , Suspense } from 'react'
import Axios from 'axios'
import Helmet from 'react-helmet'
import Parser from 'html-react-parser'
import Skeleton from 'react-loading-skeleton'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import AOS from 'aos'
import {
    CONSULTING_HEADER,
    SERVICE_ICS
} from '../Constants'
import LOGO from '../ftp_logo.png'


const Layout = React.lazy(() => import('../components/layout/Layout'))


export default class ConsultingServices extends Component {

    state = {
        header: null,
        post: null
    }

    fetchHeader = () => {
        Axios.get(CONSULTING_HEADER)
            .then(res => {
                this.setState({
                    header: res.data
                })
            })
    }

    fetchICS = () => {
        Axios.get(SERVICE_ICS)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })
    }

    componentDidMount() {
        this.fetchHeader()
        this.fetchICS()
        window.scrollTo(0,0)
        AOS.init()
    }

    render() {
        const header = this.state.header
        const post = this.state.post

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
                                    title="IT Consulting Services"
                                    meta={[
                                        {
                                            name: 'description',
                                            content: 'We offer IT consulting services that will help you improve your software architecture, create a tech-driven digital strategy, and improve operations by optimising your software portfolio.'
                                        },
                                        {
                                            property: 'og:description',
                                            content: 'We offer IT consulting services that will help you improve your software architecture, create a tech-driven digital strategy, and improve operations by optimising your software portfolio.'
                                        },
                                        { property: 'og:title', content: 'IT Consulting Services - Frontier Technology Partners' },
                                        { property: 'og:url', content: `${window.location.href}` },
                                        { property: 'og:image', content: `${header.field_page_headers_image[0].url}` },
                                        { property: 'twitter:image:src', content: `${header.field_page_headers_image[0].url}` },
                                        { property: 'twitter:title', content: 'IT Consulting Services - Frontier Technology Partners' },
                                        { property: 'twitter:description', content: 'We offer IT consulting services that will help you improve your software architecture, create a tech-driven digital strategy, and improve operations by optimising your software portfolio.' }
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
                                post ? (
                                    <div
                                        key={post.nid[0].value}
                                    >
                                        <h2
                                            className="headTitle mb-4 default-color"
                                            style={{
                                                letterSpacing: '0.5px'
                                            }}
                                        >
                                            {post.field_os_title_1[0].value}
                                        </h2>
                                        <p
                                            dangerouslySetInnerHTML={{__html: post.field_os_detail_1[0].value}}
                                            className="p-font h-100 mb-0 text-secondary"
                                            style={{
                                                fontSize: '22px',
                                                lineHeight: '1.5em'
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        <div
                                            className="mb-4"
                                        >
                                            <Skeleton width={300} height={25} />
                                        </div>
                                        <div
                                            className=""
                                            style={{
                                                lineHeight: '1.5em'
                                            }}
                                        >
                                            <Skeleton count={4} />
                                        </div>
                                    </div>
                                )
                            }

                            <div 
                                className="row"
                                style={{
                                    marginTop: '4rem'
                                }}
                            >

                                {
                                    post ? (
                                        <div 
                                            className="col-12 col-md-4 px-0 text-center text-white"
                                        >
                                            <div
                                                className="h-100 w-100"
                                                style={{
                                                    background: "transparent url("+ post.field_os_others_image_1[0].url +") no-repeat center",
                                                    backgroundSize: 'cover'
                                                }}
                                            >
                                                <h4
                                                    className="headTitle px-4 text-uppercase h-100 d-flex align-items-center mb-0 justify-content-center"
                                                    style={{
                                                        letterSpacing: '1px',
                                                        fontSize: '21px',
                                                        paddingTop: '7rem',
                                                        paddingBottom: '7rem',
                                                        background: 'rgba(0, 0, 0, 0.89)',
                                                        lineHeight: '1.6em'
                                                    }}
                                                >{Parser(post.field_os_others_title_1[0].value)}</h4>
                                            </div>
                                        </div>
                                    ) : (
                                        <div 
                                            className="col-12 col-md-4 px-0 text-center"
                                        >
                                            <div
                                                className="h-100 w-100"
                                            >
                                                <Skeleton height={400} />
                                            </div>
                                        </div>
                                    )
                                }

                                {
                                    post ? (
                                        <div 
                                            className="col-12 col-md-4 px-0 text-center text-white"
                                        >
                                            <div
                                                className="h-100 w-100"
                                                style={{
                                                    background: "transparent url("+ post.field_os_others_image_2[0].url +") no-repeat center",
                                                    backgroundSize: 'cover'
                                                }}
                                            >
                                                <div
                                                    className="px-4 h-100 d-flex flex-column justify-content-center"
                                                    style={{
                                                        paddingTop: '5rem',
                                                        paddingBottom: '5rem',
                                                        background: 'rgba(0, 155, 206, 0.87)'
                                                    }}
                                                >
                                                    <h4
                                                        className="headTitle text-uppercase mb-3"
                                                        style={{
                                                            letterSpacing: '1px',
                                                            fontSize: '21px',
                                                            lineHeight: '1.6em'
                                                        }}
                                                    >{Parser(post.field_os_others_title_2[0].value)}</h4>
                                                    <p
                                                        dangerouslySetInnerHTML={{__html: post.field_os_others_description_2[0].value}}
                                                        className="p-font mb-0 d-p"
                                                        style={{
                                                            fontSize: '18px'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div 
                                            className="col-12 col-md-4 px-0 text-center"
                                        >
                                            <div
                                                className="h-100 w-100"
                                            >
                                                <Skeleton height={400} />
                                            </div>
                                        </div>
                                    )
                                }

                                {
                                    post ? (
                                        <div 
                                            className="col-12 col-md-4 px-0 text-center text-white"
                                        >
                                            <div
                                                className="h-100 w-100"
                                                style={{
                                                    background: "transparent url("+ post.field_os_others_image_3[0].url +") no-repeat center",
                                                    backgroundSize: 'cover'
                                                }}
                                            >
                                                <h4
                                                    className="headTitle text-uppercase px-4 h-100 d-flex align-items-center mb-0 justify-content-center"
                                                    style={{
                                                        letterSpacing: '1px',
                                                        fontSize: '21px',
                                                        paddingTop: '7rem',
                                                        paddingBottom: '7rem',
                                                        background: 'rgba(0, 0, 0, 0.89)',
                                                        lineHeight: '1.6em'
                                                    }}
                                                >{Parser(post.field_os_others_title_3[0].value)}</h4>
                                            </div>
                                        </div>
                                    ) : (
                                        <div 
                                            className="col-12 col-md-4 px-0 text-center"
                                        >
                                            <div
                                                className="h-100 w-100"
                                            >
                                                <Skeleton height={400} />
                                            </div>
                                        </div>
                                    )
                                }

                            </div>

                        </div>
                    </div>

                    <div
                        className="bg-white"
                        style={{
                            paddingTop: '3rem',
                            paddingBottom: '4rem'
                        }}
                    >
                        <div 
                            className="container"
                        >

                            {
                                post ? (
                                    <div
                                        key={post.uuid[0].value}
                                    >
                                        <h2
                                            className="headTitle text-center mb-4 default-color"
                                            style={{
                                                letterSpacing: '0.5px'
                                            }}
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                        >
                                            {post.field_os_title_2[0].value}
                                        </h2>
                                        <p
                                            dangerouslySetInnerHTML={{__html: post.field_os_detail_2[0].value}}
                                            className="p-font h-100 mb-0 text-secondary text-center mx-auto"
                                            style={{
                                                fontSize: '22px',
                                                lineHeight: '1.5em',
                                                width: '770px',
                                                maxWidth: '100%'
                                            }}
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <div
                                            className="text-center mb-4"
                                        >
                                            <Skeleton width={300} height={25} />
                                        </div>
                                        <div
                                            className="text-center mx-auto"
                                            style={{
                                                lineHeight: '1.5em',
                                                width: '770px',
                                                maxWidth: '100%'
                                            }}
                                        >
                                            <Skeleton count={4} />
                                        </div>
                                    </>
                                )
                            }

                            <div 
                                className="row"
                                style={{
                                    marginTop: '5rem'
                                }}
                            >

                                {
                                    post ? (
                                        <div
                                            key={post.nid[0].value} 
                                            className="col-12 col-sm-6 col-lg-3 text-center my-4 my-lg-0 overflow-hidden"
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                        >
                                            <h1
                                                className="d-inline-block mb-0 bold-header"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    lineHeight: '60px',
                                                    border: '2px solid #009bce',
                                                    borderRadius: '60px',
                                                    color: '#009bce',
                                                    fontSize: '26px'
                                                }}
                                            >
                                                1
                                            </h1>
                                            <h2
                                                className="headTitle text-uppercase"
                                                style={{
                                                    letterSpacing: '1px',
                                                    fontSize: '1.5rem',
                                                    marginBottom: '3rem',
                                                    marginTop: '2rem'
                                                }}
                                            >
                                                {Parser(post.field_os_feat_title_1[0].value)}
                                            </h2>
                                            <p
                                                className="p-font mb-0 text-secondary py-4 d-p h-100 text-left"
                                                style={{
                                                    background: '#f5f5f5',
                                                    fontSize: '20px',
                                                    paddingLeft: '30px',
                                                    paddingRight: '30px'
                                                }}
                                                dangerouslySetInnerHTML={{__html: post.field_os_feat_description_1[0].value}}
                                            />
                                        </div>
                                    ) : (
                                        <div 
                                            className="col-12 col-sm-6 col-lg-3 text-center my-4 my-lg-0 overflow-hidden"
                                        >
                                            <div>
                                                <Skeleton width={60} height={60} circle={true} />
                                            </div>
                                            <div
                                                style={{
                                                    marginBottom: '3rem',
                                                    marginTop: '2rem'
                                                }}
                                            >
                                                <Skeleton width={150} height={30} />
                                            </div>
                                            <div
                                                className="py-4 d-p h-100 text-left"
                                                style={{
                                                    background: '#f5f5f5',
                                                    paddingLeft: '30px',
                                                    paddingRight: '30px'
                                                }}
                                            >
                                                <Skeleton count={10} />
                                            </div>
                                        </div>
                                    )
                                }

                                {
                                    post ? (
                                        <div 
                                            key={post.nid[0].value}
                                            className="col-12 col-sm-6 col-lg-3 text-center my-4 my-lg-0 overflow-hidden"
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                        >
                                            <h1
                                                className="d-inline-block mb-0 bold-header"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    lineHeight: '60px',
                                                    border: '2px solid #009bce',
                                                    borderRadius: '60px',
                                                    color: '#009bce',
                                                    fontSize: '26px'
                                                }}
                                            >
                                                2
                                            </h1>
                                            <h2
                                                className="headTitle text-uppercase"
                                                style={{
                                                    letterSpacing: '1px',
                                                    fontSize: '1.5rem',
                                                    marginBottom: '3rem',
                                                    marginTop: '2rem'
                                                }}
                                            >
                                                {Parser(post.field_os_feat_title_2[0].value)}
                                            </h2>
                                            <p
                                                className="p-font mb-0 text-secondary h-100 py-4 d-p text-left"
                                                style={{
                                                    background: '#f5f5f5',
                                                    fontSize: '20px',
                                                    paddingLeft: '30px',
                                                    paddingRight: '30px'
                                                }}
                                                dangerouslySetInnerHTML={{__html: post.field_os_feat_description_2[0].value}}
                                            />
                                        </div>
                                    ) : (
                                        <div 
                                            className="col-12 col-sm-6 col-lg-3 text-center my-4 my-lg-0 overflow-hidden"
                                        >
                                            <div>
                                                <Skeleton width={60} height={60} circle={true} />
                                            </div>
                                            <div
                                                style={{
                                                    marginBottom: '3rem',
                                                    marginTop: '2rem'
                                                }}
                                            >
                                                <Skeleton width={150} height={30} />
                                            </div>
                                            <div
                                                className="py-4 d-p h-100 text-left"
                                                style={{
                                                    background: '#f5f5f5',
                                                    paddingLeft: '30px',
                                                    paddingRight: '30px'
                                                }}
                                            >
                                                <Skeleton count={10} />
                                            </div>
                                        </div>
                                    )
                                }

                                {
                                    post ? (
                                        <div 
                                            key={post.nid[0].value}
                                            className="col-12 col-sm-6 col-lg-3 text-center my-4 my-lg-0 overflow-hidden"
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                        >
                                            <h1
                                                className="d-inline-block mb-0 bold-header"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    lineHeight: '60px',
                                                    border: '2px solid #009bce',
                                                    borderRadius: '60px',
                                                    color: '#009bce',
                                                    fontSize: '26px'
                                                }}
                                            >
                                                3
                                            </h1>
                                            <h2
                                                className="headTitle text-uppercase"
                                                style={{
                                                    letterSpacing: '1px',
                                                    fontSize: '1.5rem',
                                                    marginBottom: '3rem',
                                                    marginTop: '2rem'
                                                }}
                                            >
                                                {Parser(post.field_os_feat_title_3[0].value)}
                                            </h2>
                                            <p
                                                className="p-font mb-0 text-secondary h-100 py-4 d-p text-left"
                                                style={{
                                                    background: '#f5f5f5',
                                                    fontSize: '20px',
                                                    paddingLeft: '30px',
                                                    paddingRight: '30px'
                                                }}
                                                dangerouslySetInnerHTML={{__html: post.field_os_feat_description_3[0].value}}
                                            />
                                        </div>
                                    ) : (
                                        <div 
                                            className="col-12 col-sm-6 col-lg-3 text-center my-4 my-lg-0 overflow-hidden"
                                        >
                                            <div>
                                                <Skeleton width={60} height={60} circle={true} />
                                            </div>
                                            <div
                                                style={{
                                                    marginBottom: '3rem',
                                                    marginTop: '2rem'
                                                }}
                                            >
                                                <Skeleton width={150} height={30} />
                                            </div>
                                            <div
                                                className="py-4 d-p h-100 text-left"
                                                style={{
                                                    background: '#f5f5f5',
                                                    paddingLeft: '30px',
                                                    paddingRight: '30px'
                                                }}
                                            >
                                                <Skeleton count={10} />
                                            </div>
                                        </div>
                                    )
                                }

                                {
                                    post ? (
                                        <div 
                                            key={post.nid[0].value}
                                            className="col-12 col-sm-6 col-lg-3 text-center my-4 my-lg-0 overflow-hidden"
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                        >
                                            <h1
                                                className="d-inline-block mb-0 bold-header"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    lineHeight: '60px',
                                                    border: '2px solid #009bce',
                                                    borderRadius: '60px',
                                                    color: '#009bce',
                                                    fontSize: '26px'
                                                }}
                                            >
                                                4
                                            </h1>
                                            <h2
                                                className="headTitle text-uppercase"
                                                style={{
                                                    letterSpacing: '1px',
                                                    fontSize: '1.5rem',
                                                    marginBottom: '3rem',
                                                    marginTop: '2rem'
                                                }}
                                            >
                                                {Parser(post.field_os_feat_title_4[0].value)}
                                            </h2>
                                            <p
                                                className="p-font mb-0 text-secondary h-100 py-4 d-p text-left"
                                                style={{
                                                    background: '#f5f5f5',
                                                    fontSize: '20px',
                                                    paddingLeft: '30px',
                                                    paddingRight: '30px'
                                                }}
                                                dangerouslySetInnerHTML={{__html: post.field_os_feat_description_4[0].value}}
                                            />
                                        </div>
                                    ) : (
                                        <div 
                                            className="col-12 col-sm-6 col-lg-3 text-center my-4 my-lg-0 overflow-hidden"
                                        >
                                            <div>
                                                <Skeleton width={60} height={60} circle={true} />
                                            </div>
                                            <div
                                                style={{
                                                    marginBottom: '3rem',
                                                    marginTop: '2rem'
                                                }}
                                            >
                                                <Skeleton width={150} height={30} />
                                            </div>
                                            <div
                                                className="py-4 d-p h-100 text-left"
                                                style={{
                                                    background: '#f5f5f5',
                                                    paddingLeft: '30px',
                                                    paddingRight: '30px'
                                                }}
                                            >
                                                <Skeleton count={10} />
                                            </div>
                                        </div>
                                    )
                                }

                            </div>

                        </div>
                    </div>

                </Layout>
            </Suspense>
        )
    }
}
