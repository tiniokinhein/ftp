import React, { Component , Suspense } from 'react'
import Axios from 'axios'
import Parser from 'html-react-parser'
import Helmet from 'react-helmet'
import Skeleton from 'react-loading-skeleton'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import AOS from 'aos'
import {
    NETWORK_HEADER,
    SERVICE_NS
} from '../Constants'
import LOGO from '../ftp_logo.png'


const Layout = React.lazy(() => import('../components/layout/Layout'))



export default class NetworkSecurity extends Component {

    state = {
        header: null,
        network: null
    }

    fetchHEADER = () => {
        Axios.get(NETWORK_HEADER)
            .then(res => {
                this.setState({
                    header: res.data
                })
            })
    }

    fetchNS = () => {
        Axios.get(SERVICE_NS)
            .then(res => {
                this.setState({
                    network: res.data
                })
            })
    }

    componentDidMount() {
        this.fetchHEADER()
        this.fetchNS()
        window.scrollTo(0,0)
        AOS.init()
    }

    render() {
        const header = this.state.header
        const network = this.state.network

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
                                    title="Network & Security"
                                    meta={[
                                        {
                                            name: 'description',
                                            content: 'We offer a wide range of security services to organizations of all sizes that protect your entire network, safeguarding the perimeter, critical internal assets, data, remote users, customers and partners.'
                                        },
                                        {
                                            property: 'og:description',
                                            content: 'We offer a wide range of security services to organizations of all sizes that protect your entire network, safeguarding the perimeter, critical internal assets, data, remote users, customers and partners.'
                                        },
                                        { property: 'og:title', content: 'Network & Security - Frontier Technology Partners' },
                                        { property: 'og:url', content: `${window.location.href}` },
                                        { property: 'og:image', content: `${header.field_page_headers_image[0].url}` },
                                        { property: 'twitter:image:src', content: `${header.field_page_headers_image[0].url}` },
                                        { property: 'twitter:title', content: 'Network & Security - Frontier Technology Partners' },
                                        { property: 'twitter:description', content: 'We offer a wide range of security services to organizations of all sizes that protect your entire network, safeguarding the perimeter, critical internal assets, data, remote users, customers and partners.' }
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
                                network ? (
                                    <div
                                        key={network.nid[0].value}
                                    >
                                        <h2
                                            className="headTitle mb-4 default-color"
                                            style={{
                                                letterSpacing: '0.5px'
                                            }}
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                        >
                                            {network.field_os_title_1[0].value}
                                        </h2>
                                        <p
                                            className="p-font text-secondary mb-0 px-0"
                                            style={{
                                                fontSize: '20px'
                                            }}
                                            data-aos={"fade-up"}
                                            data-aos-duration={"2000"}
                                            dangerouslySetInnerHTML={{__html: network.field_os_detail_1[0].value}}
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        <div 
                                            className="mb-4" 
                                        >
                                            <Skeleton height={30} width={250} />
                                        </div>
                                        <div
                                            className="px-0"
                                            style={{
                                                lineHeight: '2em'
                                            }}
                                        >
                                            <Skeleton count={3} />
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
                                    Protect your IT resources and utilize the network by fine tuning the following network utilities :
                                </h2>
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-4 py-5">
                                        {
                                            network ? (
                                                <div
                                                    key={network.nid[0].value}
                                                    className="text-center"
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    <img
                                                        src={network.field_os_feat_image_1[0].url}
                                                        alt={network.field_os_feat_title_1[0].value}
                                                        className="img-fluid rounded-circle"
                                                        style={{
                                                            width: '200px'
                                                        }}
                                                    />
                                                    <h2
                                                        className="headTitle mt-4"
                                                        style={{
                                                            letterSpacing: '0.5px',
                                                            color: '#000',
                                                            fontSize: '22px'
                                                        }}
                                                    >
                                                        {Parser(network.field_os_feat_title_1[0].value)}
                                                    </h2>
                                                </div>
                                            ) : (
                                                <div 
                                                    className="text-center" 
                                                >
                                                    <Skeleton circle={true} width={200} height={200} />
                                                    <div className="mt-4" >
                                                        <Skeleton width={150} height={25} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 py-5">
                                        {
                                            network ? (
                                                <div
                                                    key={network.nid[0].value}
                                                    className="text-center"
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    <img
                                                        src={network.field_os_feat_image_2[0].url}
                                                        alt={network.field_os_feat_title_2[0].value}
                                                        className="img-fluid rounded-circle"
                                                        style={{
                                                            width: '200px'
                                                        }}
                                                    />
                                                    <h2
                                                        className="headTitle mt-4"
                                                        style={{
                                                            letterSpacing: '0.5px',
                                                            color: '#000',
                                                            fontSize: '22px'
                                                        }}
                                                    >
                                                        {Parser(network.field_os_feat_title_2[0].value)}
                                                    </h2>
                                                </div>
                                            ) : (
                                                <div 
                                                    className="text-center"
                                                >
                                                    <Skeleton circle={true} width={200} height={200} />
                                                    <div className="mt-4" >
                                                        <Skeleton width={150} height={25} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 py-5">
                                        {
                                            network ? (
                                                <div
                                                    key={network.nid[0].value}
                                                    className="text-center"
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    <img
                                                        src={network.field_os_feat_image_3[0].url}
                                                        alt={network.field_os_feat_title_3[0].value}
                                                        className="img-fluid rounded-circle"
                                                        style={{
                                                            width: '200px'
                                                        }}
                                                    />
                                                    <h2
                                                        className="headTitle mt-4"
                                                        style={{
                                                            letterSpacing: '0.5px',
                                                            color: '#000',
                                                            fontSize: '22px'
                                                        }}
                                                    >
                                                        {Parser(network.field_os_feat_title_3[0].value)}
                                                    </h2>
                                                </div>
                                            ) : (
                                                <div 
                                                    className="text-center" 
                                                >
                                                    <Skeleton circle={true} width={200} height={200} />
                                                    <div className="mt-4" >
                                                        <Skeleton width={150} height={25} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 py-5">
                                        {
                                            network ? (
                                                <div
                                                    key={network.nid[0].value}
                                                    className="text-center"
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    <img
                                                        src={network.field_os_feat_image_4[0].url}
                                                        alt={network.field_os_feat_title_4[0].value}
                                                        className="img-fluid rounded-circle"
                                                        style={{
                                                            width: '200px'
                                                        }}
                                                    />
                                                    <h2
                                                        className="headTitle mt-4"
                                                        style={{
                                                            letterSpacing: '0.5px',
                                                            color: '#000',
                                                            fontSize: '22px'
                                                        }}
                                                    >
                                                        {Parser(network.field_os_feat_title_4[0].value)}
                                                    </h2>
                                                </div>
                                            ) : (
                                                <div 
                                                    className="text-center" 
                                                >
                                                    <Skeleton circle={true} width={200} height={200} />
                                                    <div className="mt-4" >
                                                        <Skeleton width={150} height={25} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 py-5">
                                        {
                                            network ? (
                                                <div
                                                    key={network.nid[0].value}
                                                    className="text-center"
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    <img
                                                        src={network.field_os_feat_image_5[0].url}
                                                        alt={network.field_os_feat_title_5[0].value}
                                                        className="img-fluid rounded-circle"
                                                        style={{
                                                            width: '200px'
                                                        }}
                                                    />
                                                    <h2
                                                        className="headTitle mt-4"
                                                        style={{
                                                            letterSpacing: '0.5px',
                                                            color: '#000',
                                                            fontSize: '22px'
                                                        }}
                                                    >
                                                        {Parser(network.field_os_feat_title_5[0].value)}
                                                    </h2>
                                                </div>
                                            ) : (
                                                <div 
                                                    className="text-center" 
                                                >
                                                    <Skeleton circle={true} width={200} height={200} />
                                                    <div className="mt-4" >
                                                        <Skeleton width={150} height={25} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 py-5">
                                        {
                                            network ? (
                                                <div
                                                    key={network.nid[0].value}
                                                    className="text-center"
                                                    data-aos={"fade-up"}
                                                    data-aos-duration={"2000"}
                                                >
                                                    <img
                                                        src={network.field_os_feat_image_6[0].url}
                                                        alt={network.field_os_feat_title_6[0].value}
                                                        className="img-fluid rounded-circle"
                                                        style={{
                                                            width: '200px'
                                                        }}
                                                    />
                                                    <h2
                                                        className="headTitle mt-4"
                                                        style={{
                                                            letterSpacing: '0.5px',
                                                            color: '#000',
                                                            fontSize: '22px'
                                                        }}
                                                    >
                                                        {Parser(network.field_os_feat_title_6[0].value)}
                                                    </h2>
                                                </div>
                                            ) : (
                                                <div 
                                                    className="text-center" 
                                                >
                                                    <Skeleton circle={true} width={200} height={200} />
                                                    <div className="mt-4" >
                                                        <Skeleton width={150} height={25} />
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
