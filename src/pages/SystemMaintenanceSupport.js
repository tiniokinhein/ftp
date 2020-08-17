import React, { Component , Suspense } from 'react'
import Axios from 'axios'
import Parser from 'html-react-parser'
import Helmet from 'react-helmet'
import Skeleton from 'react-loading-skeleton'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import AOS from 'aos'
import {
    SYSTEM_HEADER,
    SERVICE_SMS
} from '../Constants'
import LOGO from '../ftp_logo.png'


const Layout = React.lazy(() => import('../components/layout/Layout'))


export default class SystemMaintenanceSupport extends Component {

    state = {
        header: null,
        support: null
    }

    fetchHEADER = () => {
        Axios.get(SYSTEM_HEADER)
            .then(res => {
                this.setState({
                    header: res.data
                })
            })
            .catch(err => err)
    }

    fetchSMS = () => {
        Axios.get(SERVICE_SMS)
            .then(res => {
                this.setState({
                    support: res.data
                })
            })
            .catch(err => err)
    }

    componentDidMount() {
        this.fetchHEADER()
        this.fetchSMS()
        window.scrollTo(0,0)
        AOS.init()
    }

    render() {
        const header = this.state.header
        const support = this.state.support

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
                                    title="System Maintenance & Support"
                                    meta={[
                                        {
                                            name: 'description',
                                            content: 'We provide application maintenance and support services to our clients. These systems are not necessarily developed by us.'
                                        },
                                        {
                                            property: 'og:description',
                                            content: 'We provide application maintenance and support services to our clients. These systems are not necessarily developed by us.'
                                        },
                                        { property: 'og:title', content: 'System Maintenance & Support - Frontier Technology Partners' },
                                        { property: 'og:url', content: `${window.location.href}` },
                                        { property: 'og:image', content: `${header.field_page_headers_image[0].url}` },
                                        { property: 'twitter:image:src', content: `${header.field_page_headers_image[0].url}` },
                                        { property: 'twitter:title', content: 'System Maintenance & Support - Frontier Technology Partners' },
                                        { property: 'twitter:description', content: 'We provide application maintenance and support services to our clients. These systems are not necessarily developed by us.' }
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
                            paddingBottom: '3rem'
                        }}
                    >
                        <div 
                            className="container"
                        >

                            {
                                support ? (
                                    <div
                                        key={support.nid[0].value}
                                    >
                                        <h2
                                            className="headTitle mb-4 default-color"
                                            style={{
                                                letterSpacing: '0.5px'
                                            }}
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                        >
                                            {support.field_os_title_1[0].value}
                                        </h2>
                                        <p
                                            className="p-font text-secondary mb-0 px-0"
                                            style={{
                                                fontSize: '20px'
                                            }}
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                            dangerouslySetInnerHTML={{__html: support.field_os_detail_1[0].value}}
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <div 
                                            className="mb-4" 
                                        >
                                            <Skeleton width={250} height={30} />
                                        </div>
                                        {
                                            Array(7).fill().map((item,index) => (
                                                <div 
                                                    className="mb-2 px-0" 
                                                    style={{ 
                                                        lineHeight: '2em' 
                                                    }}
                                                    key={index}
                                                >
                                                    <Skeleton />
                                                </div>
                                            ))
                                        }
                                    </>
                                )
                            }
                        
                        </div>
                    </div>

                    <div
                        className="bg-white"
                        style={{
                            paddingTop: '3rem',
                            paddingBottom: '3rem'
                        }}
                    >
                        <div 
                            className="container"
                        >

                            <div>
                                <h2
                                    className="headTitle mb-4 default-color"
                                    style={{
                                        letterSpacing: '0.5px',
                                        fontSize: '24px',
                                        lineHeight: '1.5em'
                                    }}
                                    data-aos={"fade-up"}
                                    data-aos-duration={"2000"}
                                >
                                    We offer following System Maintenance and Support services :
                                </h2>
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-4 py-5">
                                        {
                                            support ? (
                                                <div
                                                    key={support.nid[0].value}
                                                    className="text-center"
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    <img
                                                        src={support.field_os_feat_image_1[0].url}
                                                        alt={support.field_os_feat_title_1[0].value}
                                                        className="img-fluid rounded-circle"
                                                        style={{
                                                            width: '200px'
                                                        }}
                                                    />
                                                    <h2
                                                        className="headTitle mt-5 mb-4"
                                                        style={{
                                                            letterSpacing: '0.5px',
                                                            color: '#000',
                                                            fontSize: '22px',
                                                            lineHeight: '1.5em'
                                                        }}
                                                    >
                                                        {Parser(support.field_os_feat_title_1[0].value)}
                                                    </h2>
                                                    <p
                                                        className="p-font text-secondary mb-0 d-p text-left"
                                                        style={{
                                                            fontSize: '18px'
                                                        }}
                                                        dangerouslySetInnerHTML={{__html: support.field_os_feat_description_1[0].value}}
                                                    />
                                                </div>
                                            ) : (
                                                <div
                                                >
                                                    <div className="text-center">
                                                        <Skeleton circle={true} width={200} height={200} />
                                                    </div>
                                                    <div className="mt-5 mb-4" >
                                                        <Skeleton height={25} />
                                                    </div>
                                                    <div
                                                        className="text-left"
                                                        style={{
                                                            lineHeight: '2em'
                                                        }}
                                                    >
                                                        <Skeleton count={5} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 py-5">
                                        {
                                            support ? (
                                                <div
                                                    key={support.nid[0].value}
                                                    className="text-center"
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    <img
                                                        src={support.field_os_feat_image_2[0].url}
                                                        alt={support.field_os_feat_title_2[0].value}
                                                        className="img-fluid rounded-circle"
                                                        style={{
                                                            width: '200px'
                                                        }}
                                                    />
                                                    <h2
                                                        className="headTitle mt-5 mb-4"
                                                        style={{
                                                            letterSpacing: '0.5px',
                                                            color: '#000',
                                                            fontSize: '22px',
                                                            lineHeight: '1.5em'
                                                        }}
                                                    >
                                                        {Parser(support.field_os_feat_title_2[0].value)}
                                                    </h2>
                                                    <p
                                                        className="p-font text-secondary mb-0 d-p text-left"
                                                        style={{
                                                            fontSize: '18px'
                                                        }}
                                                        dangerouslySetInnerHTML={{__html: support.field_os_feat_description_2[0].value}}
                                                    />
                                                </div>
                                            ) : (
                                                <div
                                                >
                                                    <div className="text-center">
                                                        <Skeleton circle={true} width={200} height={200} />
                                                    </div>
                                                    <div className="mt-5 mb-4" >
                                                        <Skeleton height={25} />
                                                    </div>
                                                    <div
                                                        className="text-left"
                                                        style={{
                                                            lineHeight: '2em'
                                                        }}
                                                    >
                                                        <Skeleton count={5} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 py-5">
                                        {
                                            support ? (
                                                <div
                                                    key={support.nid[0].value}
                                                    className="text-center"
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    <img
                                                        src={support.field_os_feat_image_3[0].url}
                                                        alt={support.field_os_feat_title_3[0].value}
                                                        className="img-fluid rounded-circle"
                                                        style={{
                                                            width: '200px'
                                                        }}
                                                    />
                                                    <h2
                                                        className="headTitle mt-5 mb-4"
                                                        style={{
                                                            letterSpacing: '0.5px',
                                                            color: '#000',
                                                            fontSize: '22px',
                                                            lineHeight: '1.5em'
                                                        }}
                                                    >
                                                        {Parser(support.field_os_feat_title_3[0].value)}
                                                    </h2>
                                                    <p
                                                        className="p-font text-secondary mb-0 d-p text-left"
                                                        style={{
                                                            fontSize: '18px'
                                                        }}
                                                        dangerouslySetInnerHTML={{__html: support.field_os_feat_description_3[0].value}}
                                                    />
                                                </div>
                                            ) : (
                                                <div
                                                >
                                                    <div className="text-center">
                                                        <Skeleton circle={true} width={200} height={200} />
                                                    </div>
                                                    <div className="mt-5 mb-4" >
                                                        <Skeleton height={25} />
                                                    </div>
                                                    <div
                                                        className="text-left"
                                                        style={{
                                                            lineHeight: '2em'
                                                        }}
                                                    >
                                                        <Skeleton count={5} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 py-5">
                                        {
                                            support ? (
                                                <div
                                                    key={support.nid[0].value}
                                                    className="text-center"
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    <img
                                                        src={support.field_os_feat_image_4[0].url}
                                                        alt={support.field_os_feat_title_4[0].value}
                                                        className="img-fluid rounded-circle"
                                                        style={{
                                                            width: '200px'
                                                        }}
                                                    />
                                                    <h2
                                                        className="headTitle mt-5 mb-4"
                                                        style={{
                                                            letterSpacing: '0.5px',
                                                            color: '#000',
                                                            fontSize: '22px',
                                                            lineHeight: '1.5em'
                                                        }}
                                                    >
                                                        {Parser(support.field_os_feat_title_4[0].value)}
                                                    </h2>
                                                    <p
                                                        className="p-font text-secondary mb-0 d-p text-left"
                                                        style={{
                                                            fontSize: '18px'
                                                        }}
                                                        dangerouslySetInnerHTML={{__html: support.field_os_feat_description_4[0].value}}
                                                    />
                                                </div>
                                            ) : (
                                                <div
                                                >
                                                    <div className="text-center">
                                                        <Skeleton circle={true} width={200} height={200} />
                                                    </div>
                                                    <div className="mt-5 mb-4" >
                                                        <Skeleton height={25} />
                                                    </div>
                                                    <div
                                                        className="text-left"
                                                        style={{
                                                            lineHeight: '2em'
                                                        }}
                                                    >
                                                        <Skeleton count={5} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 py-5">
                                        {
                                            support ? (
                                                <div
                                                    key={support.nid[0].value}
                                                    className="text-center"
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    <img
                                                        src={support.field_os_feat_image_5[0].url}
                                                        alt={support.field_os_feat_title_5[0].value}
                                                        className="img-fluid rounded-circle"
                                                        style={{
                                                            width: '200px'
                                                        }}
                                                    />
                                                    <h2
                                                        className="headTitle mt-5 mb-4"
                                                        style={{
                                                            letterSpacing: '0.5px',
                                                            color: '#000',
                                                            fontSize: '22px',
                                                            lineHeight: '1.5em'
                                                        }}
                                                    >
                                                        {Parser(support.field_os_feat_title_5[0].value)}
                                                    </h2>
                                                    <p
                                                        className="p-font text-secondary mb-0 d-p text-left"
                                                        style={{
                                                            fontSize: '18px'
                                                        }}
                                                        dangerouslySetInnerHTML={{__html: support.field_os_feat_description_5[0].value}}
                                                    />
                                                </div>
                                            ) : (
                                                <div
                                                >
                                                    <div className="text-center">
                                                        <Skeleton circle={true} width={200} height={200} />
                                                    </div>
                                                    <div className="mt-5 mb-4" >
                                                        <Skeleton height={25} />
                                                    </div>
                                                    <div
                                                        className="text-left"
                                                        style={{
                                                            lineHeight: '2em'
                                                        }}
                                                    >
                                                        <Skeleton count={5} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 py-5">
                                        {
                                            support ? (
                                                <div
                                                    key={support.nid[0].value}
                                                    className="text-center"
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    <img
                                                        src={support.field_os_feat_image_6[0].url}
                                                        alt={support.field_os_feat_title_6[0].value}
                                                        className="img-fluid rounded-circle"
                                                        style={{
                                                            width: '200px'
                                                        }}
                                                    />
                                                    <h2
                                                        className="headTitle mt-5 mb-4"
                                                        style={{
                                                            letterSpacing: '0.5px',
                                                            color: '#000',
                                                            fontSize: '22px',
                                                            lineHeight: '1.5em'
                                                        }}
                                                    >
                                                        {Parser(support.field_os_feat_title_6[0].value)}
                                                    </h2>
                                                    <p
                                                        className="p-font text-secondary mb-0 d-p text-left"
                                                        style={{
                                                            fontSize: '18px'
                                                        }}
                                                        dangerouslySetInnerHTML={{__html: support.field_os_feat_description_6[0].value}}
                                                    />
                                                </div>
                                            ) : (
                                                <div
                                                >
                                                    <div className="text-center">
                                                        <Skeleton circle={true} width={200} height={200} />
                                                    </div>
                                                    <div className="mt-5 mb-4" >
                                                        <Skeleton height={25} />
                                                    </div>
                                                    <div
                                                        className="text-left"
                                                        style={{
                                                            lineHeight: '2em'
                                                        }}
                                                    >
                                                        <Skeleton count={5} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </Layout>
            </Suspense>
        )
    }
}
