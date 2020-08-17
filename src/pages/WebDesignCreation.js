import React, { Component , Suspense } from 'react'
import Helmet from 'react-helmet'
import Axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import Parser from 'html-react-parser'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import AOS from 'aos'
import {
    WEB_HEADER,
    SERVICE_WDC
} from '../Constants'
import LOGO from '../ftp_logo.png'


const Layout = React.lazy(() => import('../components/layout/Layout'))


export default class WebDesignCreation extends Component {

    state = {
        header: null,
        post: null
    }

    fetchHEADER = () => {
        Axios.get(WEB_HEADER)
            .then(res => {
                this.setState({
                    header: res.data
                })
            })
            .catch(err => err)
    }

    fetchWEB = () => {
        Axios.get(SERVICE_WDC)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })
            .catch(err => err)
    }

    componentDidMount() {
        this.fetchHEADER()
        this.fetchWEB()
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
                                    title="Web Design Creation"
                                    meta={[
                                        {
                                            name: 'description',
                                            content: 'We create our own unique way to develop websites'
                                        },
                                        {
                                            property: 'og:description',
                                            content: 'We create our own unique way to develop websites'
                                        },
                                        { property: 'og:title', content: 'Web Design Creation - Frontier Technology Partners' },
                                        { property: 'og:url', content: `${window.location.href}` },
                                        { property: 'og:image', content: `${header.field_page_headers_image[0].url}` },
                                        { property: 'twitter:image:src', content: `${header.field_page_headers_image[0].url}` },
                                        { property: 'twitter:title', content: 'Web Design Creation - Frontier Technology Partners' },
                                        { property: 'twitter:description', content: 'We create our own unique way to develop websites' }
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
                                        <div className="row">
                                            <div className="col-12 col-md-6 py-4 py-md-0">
                                                <LazyLoadImage
                                                    src={post.field_os_image_1[0].url}
                                                    alt={post.field_os_title_1[0].value}
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
                                                <h4
                                                    className="p-font mb-2"
                                                    style={{
                                                        fontSize: '28px',
                                                        lineHeight: '1.3em',
                                                        color: '#a0a0a0'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    {Parser(post.field_os_detail_1[0].summary)}
                                                </h4>
                                                <p
                                                    className="p-font text-secondary d-p mb-0"
                                                    style={{
                                                        fontSize: '20px'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                    dangerouslySetInnerHTML={{__html: post.field_os_detail_1[0].value}}
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
                                        <div className="row">
                                            <div className="col-12 col-md-6 py-4 py-md-0 pl-3 pl-md-5 order-md-2">
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
                                            <div className="col-12 col-md-6 py-4 py-md-0">
                                                <h2
                                                    className="headTitle mb-4 default-color"
                                                    style={{
                                                        letterSpacing: '0.5px'
                                                    }}
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    {post.field_os_title_2[0].value}
                                                </h2>
                                                <h4
                                                    className="p-font mb-2"
                                                    style={{
                                                        fontSize: '28px',
                                                        lineHeight: '1.3em',
                                                        color: '#a0a0a0'
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
                                        <div>
                                            <h2
                                                className="headTitle text-left mb-4 default-color"
                                                style={{
                                                    letterSpacing: '0.5px',
                                                    lineHeight: '1.5em'
                                                }}
                                                data-aos={"fade-up"}
                                                data-aos-duration={"2000"}
                                            >
                                                {post.field_os_title_3[0].value}
                                            </h2>
                                            <p
                                                className="p-font text-secondary d-p mb-0 c-ul"
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
                                        <div className="row">
                                            <div className="col-12 col-md-6 py-4 py-md-0">
                                                <div 
                                                    className="w-100" 
                                                >
                                                    <Skeleton height={400} />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 py-4 py-md-0 pl-3 pl-md-5">
                                                <div 
                                                    className="mb-4"
                                                >
                                                    <Skeleton width={250} height={30} />
                                                </div>
                                                {
                                                    Array(2).fill().map((item,index) => (
                                                        <div 
                                                            className="mb-2" 
                                                            style={{ 
                                                                lineHeight: '3em' 
                                                            }}
                                                            key={index}
                                                        >
                                                            <Skeleton height={25} />
                                                        </div>
                                                    ))
                                                }
                                                {
                                                    Array(5).fill().map((item,index) => (
                                                        <div  
                                                            className="mb-2"
                                                            style={{ 
                                                                lineHeight: '3em' 
                                                            }}
                                                            key={index}
                                                        >
                                                            <Skeleton />
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
                                        paddingBottom: '4rem'
                                    }}
                                >
                                    <div 
                                        className="container"
                                    >
                                        <div
                                            style={{
                                                marginBottom: '7rem'
                                            }}
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
                                                    {
                                                        Array(2).fill().map((item,index) => (
                                                            <div 
                                                                className="mb-2" 
                                                                style={{ 
                                                                    lineHeight: '3em' 
                                                                }}
                                                                key={index}
                                                            >
                                                                <Skeleton height={25} />
                                                            </div>
                                                        ))
                                                    }
                                                    {
                                                        Array(5).fill().map((item,index) => (
                                                            <div 
                                                                className="mb-2" 
                                                                style={{ 
                                                                    lineHeight: '3em' 
                                                                }}
                                                                key={index}
                                                            >
                                                                <Skeleton />
                                                            </div>
                                                        ))
                                                    }
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
                                        <div 
                                            className="text-left mb-4 col-12 col-md-6 px-0"
                                        >
                                            <Skeleton height={30} />
                                        </div>
                                        <div 
                                            className="col-12 col-md-6 px-0" 
                                            style={{ 
                                                lineHeight: '2em' 
                                            }}
                                        >
                                            {
                                                Array(8).fill().map((item,index) => (
                                                    <div 
                                                        className="mb-2" 
                                                        style={{ 
                                                            lineHeight: '3em' 
                                                        }}
                                                        key={index}
                                                    >
                                                        <Skeleton />
                                                    </div>
                                                ))
                                            }
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
