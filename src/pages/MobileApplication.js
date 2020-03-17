import React, { Component , Suspense } from 'react'
import Parser from 'html-react-parser'
import Helmet from 'react-helmet'
import Axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import AOS from 'aos'
import {
    MOBILE_HEADER,
    SERVICE_MA
} from '../Constants'
import LOGO from '../ftp_logo.png'


const Layout = React.lazy(() => import('../components/layout/Layout'))


export default class MobileApplication extends Component {

    state = {
        header: null,
        post: null
    }

    fetchHEADER = () => {
        Axios.get(MOBILE_HEADER)
            .then(res => {
                this.setState({
                    header: res.data
                })
            })
    }

    fetchMA = () => {
        Axios.get(SERVICE_MA)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })
    }

    componentDidMount() {
        this.fetchHEADER()
        this.fetchMA()
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
                                    title="Mobile Application"
                                    meta={[
                                        {
                                            name: 'description',
                                            content: 'As a leading mobile app development company, we offer extraordinary client delight while transforming ideas into efficient mobile apps.'
                                        },
                                        {
                                            property: 'og:description',
                                            content: 'As a leading mobile app development company, we offer extraordinary client delight while transforming ideas into efficient mobile apps.'
                                        },
                                        { property: 'og:title', content: 'Mobile Application - Frontier Technology Partners' },
                                        { property: 'og:url', content: `${window.location.href}` },
                                        { property: 'og:image', content: `${header.field_page_headers_image[0].url}` },
                                        { property: 'twitter:image:src', content: `${header.field_page_headers_image[0].url}` },
                                        { property: 'twitter:title', content: 'Mobile Application - Frontier Technology Partners' },
                                        { property: 'twitter:description', content: 'As a leading mobile app development company, we offer extraordinary client delight while transforming ideas into efficient mobile apps.' }
                                    ]}
                                >
                                    <link rel="canonical" href={window.location.href} />
                                </Helmet>
                                
                                <LazyLoadImage
                                    src={header.field_page_headers_image[0].url}
                                    alt=""
                                    width="100%"
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
                        post ? (
                            <div key={post.nid[0].value}>
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
                                        <h2
                                            className="headTitle mb-4 default-color"
                                            style={{
                                                letterSpacing: '0.5px',
                                                lineHeight: '1.5em'
                                            }}
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                        >
                                            {post.field_os_title_1[0].value}
                                        </h2>
                                        <p
                                            className="p-font text-secondary mb-0 px-0"
                                            style={{
                                                fontSize: '20px'
                                            }}
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                            dangerouslySetInnerHTML={{__html: post.field_os_detail_1[0].value}}
                                        />
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
                                        <div className="row">
                                            <div className="col-12 col-md-6 py-4 py-md-0">
                                                <LazyLoadImage
                                                    src={post.field_os_image_2[0].url}
                                                    alt={post.field_os_title_2[0].value}
                                                    width="100%"
                                                    height="100%"
                                                    style={{
                                                        objectFit: 'cover',
                                                        height: '50vh',
                                                        minHeight: '400px'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                />
                                            </div>
                                            <div className="col-12 col-md-6 py-4 py-md-0 pl-3 pl-md-5">
                                                <h2
                                                    className="headTitle text-left mb-4 default-color"
                                                    style={{
                                                        letterSpacing: '0.5px',
                                                        lineHeight: '1.5em'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    {post.field_os_title_2[0].value}
                                                </h2>
                                                <h4
                                                    className="p-font text-secondary mb-3"
                                                    style={{
                                                        fontSize: '28px',
                                                        lineHeight: '1.3em'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    {Parser(post.field_os_detail_2[0].summary)}
                                                </h4>
                                                <p
                                                    className="p-font text-secondary d-p mb-0"
                                                    style={{
                                                        fontSize: '20px'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                    dangerouslySetInnerHTML={{__html: post.field_os_detail_2[0].value}}
                                                />
                                            </div>
                                        </div>
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
                                        <div className="row">
                                            <div className="col-12 col-md-6 py-4 py-md-0 pl-3 pl-md-5 order-md-2">
                                                <LazyLoadImage
                                                    src={post.field_os_image_3[0].url}
                                                    alt={post.field_os_title_3[0].value}
                                                    width="100%"
                                                    height="100%"
                                                    style={{
                                                        objectFit: 'cover',
                                                        height: '50vh',
                                                        minHeight: '400px'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                />
                                            </div>
                                            <div className="col-12 col-md-6 py-4 py-md-0">
                                                <h2
                                                    className="headTitle mb-4 default-color"
                                                    style={{
                                                        letterSpacing: '0.5px',
                                                        lineHeight: '1.5em'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    {post.field_os_title_3[0].value}
                                                </h2>
                                                <h4
                                                    className="p-font text-secondary mb-3"
                                                    style={{
                                                        fontSize: '28px',
                                                        lineHeight: '1.5em'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    {Parser(post.field_os_detail_3[0].summary)}
                                                </h4>
                                                <p
                                                    className="p-font text-secondary d-p mb-0"
                                                    style={{
                                                        fontSize: '20px'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                    dangerouslySetInnerHTML={{__html: post.field_os_detail_3[0].value}}
                                                />
                                            </div>
                                        </div>

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
                                        <h2
                                            className="headTitle text-left mb-4 default-color"
                                            style={{
                                                letterSpacing: '0.5px',
                                                lineHeight: '1.5em'
                                            }}
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                        >
                                            {post.field_os_title_4[0].value}
                                        </h2>
                                        <p
                                            className="p-font text-secondary mb-0 p-ul"
                                            style={{
                                                fontSize: '20px'
                                            }}
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                            dangerouslySetInnerHTML={{__html: post.field_os_detail_4[0].value}}
                                        />
                                    </div>
                                </div>
                            </div>

                        ) : (
                            <>
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
                                        <div 
                                            className="mb-4"
                                        >
                                            <Skeleton width={250} height={30} />
                                        </div>
                                        <div
                                            className="px-0"
                                            style={{
                                                lineHeight: '2em'
                                            }}
                                        >
                                            <Skeleton count={5} />
                                        </div>
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
                                        <div className="row">
                                            <div className="col-12 col-md-6 py-4 py-md-0">
                                                <div 
                                                    className="w-100" 
                                                >
                                                    <Skeleton height={400} />
                                                </div>
                                            </div>
                                            <div 
                                                className="col-12 col-md-6 py-4 py-md-0 pl-3 pl-md-5"
                                            >
                                                <div 
                                                    className="text-left mb-4"
                                                >
                                                    <Skeleton width={250} height={30} />
                                                </div>
                                                <div 
                                                    className="mb-3" 
                                                    style={{ 
                                                        lineHeight: '3em' 
                                                    }}
                                                >
                                                    <Skeleton count={2} height={25} />
                                                </div>
                                                <div
                                                    style={{
                                                        lineHeight: '2em'
                                                    }}
                                                >
                                                    <Skeleton count={6} />
                                                </div>
                                            </div>
                                        </div>
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
                                
                                        <div className="row">
                                            <div className="col-12 col-md-6 py-4 py-md-0 pl-3 pl-md-5 order-md-2">
                                                <div 
                                                    className="w-100" 
                                                >
                                                    <Skeleton height={400} />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 py-4 py-md-0">
                                                <div 
                                                    className="mb-4"
                                                >
                                                    <Skeleton width={250} height={30} />
                                                </div>
                                                <div 
                                                    className="mb-3" 
                                                    style={{ 
                                                        lineHeight: '3em' 
                                                    }}
                                                >
                                                    <Skeleton count={2} height={25} />
                                                </div>
                                                <div
                                                    className="text-left text-md-right"
                                                    style={{
                                                        lineHeight: '2em'
                                                    }}
                                                >
                                                    <Skeleton count={6} />
                                                </div>
                                            </div>
                                        </div>
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
                                        <div 
                                            className="text-left mb-4 col-12 col-md-6 px-0"
                                        >
                                            <Skeleton height={30} />
                                        </div>
                                        <div 
                                            className="pl-md-5 col-12 col-md-6" 
                                            style={{ 
                                                lineHeight: '2em' 
                                            }}
                                        >
                                            <Skeleton count={7} />
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    }

                </Layout>
            </Suspense>
        )
    }
}
