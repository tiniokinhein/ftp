import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import styled from 'styled-components'
import Slider from 'react-slick'
import Parser from 'html-react-parser'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import {
    SERVICE_CSS,
    SERVICE_WDC,
    SERVICE_MA,
    SERVICE_SMS,
    SERVICE_NS,
    SERVICE_ICS
} from '../Constants'

export default class Services extends Component {

    state = {
        software: null,
        design: null,
        mobile: null,
        support: null,
        network: null,
        consulting: null
    }

    fetchSOFTWARE = () => {
        Axios.get(SERVICE_CSS)
            .then(res => {
                this.setState({
                    software: res.data
                })
            })
    }

    fetchDESIGN = () => {
        Axios.get(SERVICE_WDC)
            .then(res => {
                this.setState({
                    design: res.data
                })
            })
    }

    fetchMOBILE = () => {
        Axios.get(SERVICE_MA)
            .then(res => {
                this.setState({
                    mobile: res.data
                })
            })
    }

    fetchSUPPORT = () => {
        Axios.get(SERVICE_SMS)
            .then(res => {
                this.setState({
                    support: res.data
                })
            })
    }

    fetchNETWORK = () => {
        Axios.get(SERVICE_NS)
            .then(res => {
                this.setState({
                    network: res.data
                })
            })
    }

    fetchCONSULTING = () => {
        Axios.get(SERVICE_ICS)
            .then(res => {
                this.setState({
                    consulting: res.data
                })
            })
    }

    componentDidMount() {
        this.fetchSOFTWARE()
        this.fetchDESIGN()
        this.fetchMOBILE()
        this.fetchSUPPORT()
        this.fetchNETWORK()
        this.fetchCONSULTING()
    }

    render() {
        const software = this.state.software
        const design = this.state.design
        const mobile = this.state.mobile
        const support = this.state.support
        const network = this.state.network
        const consulting = this.state.consulting

        var settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        }
        
        return (
            <div
                style={{
                    paddingTop: '4rem',
                    paddingBottom: '4rem',
                    background: '#ffc107'
                }}
            >
                <div className="container">
                    <h3
                        className="bold-header text-center text-uppercase mb-3 text-dark"
                        style={{
                            letterSpacing: '2px',
                            fontSize: '3rem',
                            lineHeight: '1em',
                            // textShadow: '1px 1px 3px #333'
                        }}
                        data-aos={"fade-up"}
                        data-aos-duration={"2000"}
                    >
                        Our Services
                    </h3>
                    <h4
                        className="text-uppercase headTitle text-center text-light"
                        style={{
                            fontSize: '2rem',
                            letterSpacing: '1px',
                            // color: '#ffc107',
                            marginBottom: '3rem',
                            // textShadow: '1px 1px 3px #333'
                        }}
                        data-aos={"fade-up"}
                        data-aos-duration={"2000"}
                    >
                        Our goals is your business
                    </h4>

                    <Slider
                        {...settings}
                        className="service-slider"
                    >
                        <div
                            
                        >
                            {
                                software ? (
                                    <div
                                        key={software.nid[0].value}
                                        className="mx-5"
                                        data-aos={"fade-up"}
                                        data-aos-duration={"2000"}
                                    >
                                        <IMGWrapper
                                            src={software.field_os_icon[0].url}
                                            alt={software.title[0].value}
                                            className="img-fluid rounded-circle mx-auto"
                                        />
                                        <h2
                                            className="headTitle text-center mt-3 mb-4 text-light"
                                            style={{
                                                fontSize: '22px',
                                                letterSpacing: '1px',
                                                lineHeight: '1.5em',
                                                minHeight: '72px'
                                            }}
                                        >
                                            {Parser(software.title[0].value)}
                                        </h2>
                                        <p
                                            className="p-font text-center mb-0 d-p px-2 text-white"
                                            style={{
                                                fontSize: '20px',
                                                lineHeight: '1.5em'
                                            }}
                                            dangerouslySetInnerHTML={{__html: software.field_os_info[0].value}}
                                        />
                                        <div
                                            className="text-center mt-5 mb-3"
                                        >
                                            <Link
                                                to="/customized-software-solutions"
                                                className="c-more-link more-link px-3 py-2 rounded-0 headTitle text-capitalize text-light text-decoration-none"
                                                style={{
                                                    letterSpacing: '1px',
                                                    border: '1px solid #2553c2',
                                                    background: '#2553c2',
                                                    transition: '0.3s ease-in-out',
                                                }}
                                            >
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mx-5">
                                        <div className="d-flex justify-content-center">
                                            <SkeletonTheme color="#fff" highlightColor="#e0e0e0">
                                                <Skeleton circle={true} height={135} width={135} />
                                            </SkeletonTheme>
                                        </div>
                                        <div
                                            className="text-center text-white mt-3 mb-4"
                                            style={{
                                                minHeight: '72px'
                                            }}
                                        >
                                            <SkeletonTheme color="#fff" highlightColor="#e0e0e0">
                                                <Skeleton height={20} />
                                            </SkeletonTheme>
                                        </div>
                                        <div className="text-center mb-0">
                                            <SkeletonTheme color="#fff" highlightColor="#e0e0e0">
                                                <Skeleton count={5} />
                                            </SkeletonTheme>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        <div

                        >

                            {
                                design ? (
                                    <div
                                        key={design.nid[0].value}
                                        className="mx-5"
                                        data-aos={"fade-up"}
                                        data-aos-duration={"2000"}
                                    >
                                        <IMGWrapper
                                            src={design.field_os_icon[0].url}
                                            alt={design.title[0].value}
                                            className="img-fluid rounded-circle mx-auto"
                                        />
                                        <h2
                                            className="headTitle text-center text-light mt-3 mb-4"
                                            style={{
                                                fontSize: '22px',
                                                letterSpacing: '1px',
                                                lineHeight: '1.5em',
                                                minHeight: '72px'
                                            }}
                                        >
                                            {Parser(design.title[0].value)}
                                        </h2>
                                        <p
                                            className="p-font text-white text-center mb-0 d-p px-2"
                                            style={{
                                                fontSize: '20px',
                                                lineHeight: '1.5em'
                                            }}
                                            dangerouslySetInnerHTML={{__html: design.field_os_info[0].value}}
                                        />
                                        <div
                                            className="text-center mt-5 mb-3"
                                        >
                                            <Link
                                                to="/web-design-creation"
                                                className="c-more-link more-link px-3 py-2 rounded-0 headTitle text-capitalize text-light text-decoration-none"
                                                style={{
                                                    letterSpacing: '1px',
                                                    border: '1px solid #2553c2',
                                                    background: '#2553c2',
                                                    transition: '0.3s ease-in-out',
                                                }}
                                            >
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mx-5">
                                        <div className="d-flex justify-content-center">
                                            <SkeletonTheme color="#fff" highlightColor="#e0e0e0">
                                                <Skeleton circle={true} height={135} width={135} />
                                            </SkeletonTheme>
                                        </div>
                                        <div
                                            className="text-center text-white mt-3 mb-4"
                                            style={{
                                                minHeight: '72px'
                                            }}
                                        >
                                            <SkeletonTheme color="#fff" highlightColor="#e0e0e0">
                                                <Skeleton height={20} />
                                            </SkeletonTheme>
                                        </div>
                                        <div className="text-center mb-0">
                                            <SkeletonTheme color="#fff" highlightColor="#e0e0e0">
                                                <Skeleton count={5} />
                                            </SkeletonTheme>
                                        </div>
                                    </div>
                                )
                            }

                        </div>

                        <div

                        >

                            {
                                mobile ? (
                                    <div
                                        key={mobile.nid[0].value}
                                        className="mx-5"
                                        data-aos={"fade-up"}
                                        data-aos-duration={"2000"}
                                    >
                                        <IMGWrapper
                                            src={mobile.field_os_icon[0].url}
                                            alt={mobile.title[0].value}
                                            className="img-fluid rounded-circle mx-auto"
                                        />
                                        <h2
                                            className="headTitle text-light text-center mt-3 mb-4"
                                            style={{
                                                fontSize: '22px',
                                                letterSpacing: '1px',
                                                lineHeight: '1.5em',
                                                minHeight: '72px'
                                            }}
                                        >
                                            {Parser(mobile.title[0].value)}
                                        </h2>
                                        <p
                                            className="p-font text-white text-center mb-0 d-p px-2"
                                            style={{
                                                fontSize: '20px',
                                                lineHeight: '1.5em'
                                            }}
                                            dangerouslySetInnerHTML={{__html: mobile.field_os_info[0].value}}
                                        />
                                        <div
                                            className="text-center mt-5 mb-3"
                                        >
                                            <Link
                                                to="/mobile-application"
                                                className="c-more-link more-link px-3 py-2 rounded-0 headTitle text-capitalize text-light text-decoration-none"
                                                style={{
                                                    letterSpacing: '1px',
                                                    border: '1px solid #2553c2',
                                                    background: '#2553c2',
                                                    transition: '0.3s ease-in-out',
                                                }}
                                            >
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mx-5">
                                        <div className="d-flex justify-content-center">
                                            <SkeletonTheme color="#fff" highlightColor="#e0e0e0">
                                                <Skeleton circle={true} height={135} width={135} />
                                            </SkeletonTheme>
                                        </div>
                                        <div
                                            className="text-center text-white mt-3 mb-4"
                                            style={{
                                                minHeight: '72px'
                                            }}
                                        >
                                            <SkeletonTheme color="#fff" highlightColor="#e0e0e0">
                                                <Skeleton height={20} />
                                            </SkeletonTheme>
                                        </div>
                                        <div className="text-center mb-0">
                                            <SkeletonTheme color="#fff" highlightColor="#e0e0e0">
                                                <Skeleton count={5} />
                                            </SkeletonTheme>
                                        </div>
                                    </div>
                                )
                            }

                        </div>

                        <div
                         
                        >

                            {
                                support ? (
                                    <div
                                        key={support.nid[0].value}
                                        className="mx-5"
                                        data-aos={"fade-up"}
                                        data-aos-duration={"2000"}
                                    >
                                        <IMGWrapper
                                            src={support.field_os_icon[0].url}
                                            alt={support.title[0].value}
                                            className="img-fluid rounded-circle mx-auto"
                                        />
                                        <h2
                                            className="headTitle text-light text-center text-white mt-3 mb-4"
                                            style={{
                                                fontSize: '22px',
                                                letterSpacing: '1px',
                                                lineHeight: '1.5em',
                                                minHeight: '72px'
                                            }}
                                        >
                                            {Parser(support.title[0].value)}
                                        </h2>
                                        <p
                                            className="p-font text-white text-center mb-0 d-p px-2"
                                            style={{
                                                fontSize: '20px',
                                                lineHeight: '1.5em'
                                            }}
                                            dangerouslySetInnerHTML={{__html: support.field_os_info[0].value}}
                                        />
                                        <div
                                            className="text-center mt-5 mb-3"
                                        >
                                            <Link
                                                to="/system-maintenance-support"
                                                className="c-more-link more-link px-3 py-2 rounded-0 headTitle text-capitalize text-light text-decoration-none"
                                                style={{
                                                    letterSpacing: '1px',
                                                    border: '1px solid #2553c2',
                                                    background: '#2553c2',
                                                    transition: '0.3s ease-in-out',
                                                }}
                                            >
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mx-5">
                                        <div className="d-flex justify-content-center">
                                            <SkeletonTheme color="#fff" highlightColor="#e0e0e0">
                                                <Skeleton circle={true} height={135} width={135} />
                                            </SkeletonTheme>
                                        </div>
                                        <div
                                            className="text-center text-white mt-3 mb-4"
                                            style={{
                                                minHeight: '72px'
                                            }}
                                        >
                                            <SkeletonTheme color="#fff" highlightColor="#e0e0e0">
                                                <Skeleton height={20} />
                                            </SkeletonTheme>
                                        </div>
                                        <div className="text-center mb-0">
                                            <SkeletonTheme color="#fff" highlightColor="#e0e0e0">
                                                <Skeleton count={5} />
                                            </SkeletonTheme>
                                        </div>
                                    </div>
                                )
                            }

                        </div>

                        <div
                          
                        >

                            {
                                network ? (
                                    <div
                                        key={network.nid[0].value}
                                        className="mx-5"
                                        data-aos={"fade-up"}
                                        data-aos-duration={"2000"}
                                    >
                                        <IMGWrapper
                                            src={network.field_os_icon[0].url}
                                            alt={network.title[0].value}
                                            className="img-fluid rounded-circle mx-auto"
                                        />
                                        <h2
                                            className="headTitle text-light text-center text-white mt-3 mb-4"
                                            style={{
                                                fontSize: '22px',
                                                letterSpacing: '1px',
                                                lineHeight: '1.5em',
                                                minHeight: '72px'
                                            }}
                                        >
                                            {Parser(network.title[0].value)}
                                        </h2>
                                        <p
                                            className="p-font text-white text-center mb-0 d-p px-2"
                                            style={{
                                                fontSize: '20px',
                                                lineHeight: '1.5em'
                                            }}
                                            dangerouslySetInnerHTML={{__html: network.field_os_info[0].value}}
                                        />
                                        <div
                                            className="text-center mt-5 mb-3"
                                        >
                                            <Link
                                                to="/network-security"
                                                className="c-more-link more-link px-3 py-2 rounded-0 headTitle text-capitalize text-light text-decoration-none"
                                                style={{
                                                    letterSpacing: '1px',
                                                    border: '1px solid #2553c2',
                                                    background: '#2553c2',
                                                    transition: '0.3s ease-in-out',
                                                }}
                                            >
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mx-5">
                                        <div className="d-flex justify-content-center">
                                            <SkeletonTheme color="#fff" highlightColor="#e0e0e0">
                                                <Skeleton circle={true} height={135} width={135} />
                                            </SkeletonTheme>
                                        </div>
                                        <div
                                            className="text-center text-white mt-3 mb-4"
                                            style={{
                                                minHeight: '72px'
                                            }}
                                        >
                                            <SkeletonTheme color="#fff" highlightColor="#e0e0e0">
                                                <Skeleton height={20} />
                                            </SkeletonTheme>
                                        </div>
                                        <div className="text-center mb-0">
                                            <SkeletonTheme color="#fff" highlightColor="#e0e0e0">
                                                <Skeleton count={5} />
                                            </SkeletonTheme>
                                        </div>
                                    </div>
                                )
                            }

                        </div>

                        <div
                          
                        >

                            {
                                consulting ? (
                                    <div
                                        key={consulting.nid[0].value}
                                        className="mx-5"
                                        data-aos={"fade-up"}
                                        data-aos-duration={"2000"}
                                    >
                                        <IMGWrapper
                                            src={consulting.field_os_icon[0].url}
                                            alt={consulting.title[0].value}
                                            className="img-fluid rounded-circle mx-auto"
                                        />
                                        <h2
                                            className="headTitle text-light text-center text-white mt-3 mb-4"
                                            style={{
                                                fontSize: '22px',
                                                letterSpacing: '1px',
                                                lineHeight: '1.5em',
                                                minHeight: '72px',
                                                color: '#2553c2'
                                            }}
                                        >
                                            {Parser(consulting.title[0].value)}
                                        </h2>
                                        <p
                                            className="p-font text-white text-center mb-0 d-p px-2"
                                            style={{
                                                fontSize: '20px',
                                                lineHeight: '1.5em'
                                            }}
                                            dangerouslySetInnerHTML={{__html: consulting.field_os_info[0].value}}
                                        />
                                        <div
                                            className="text-center mt-5 mb-3"
                                        >
                                            <Link
                                                to="/it-consulting"
                                                className="c-more-link more-link px-3 py-2 rounded-0 headTitle text-capitalize text-light text-decoration-none"
                                                style={{
                                                    letterSpacing: '1px',
                                                    border: '1px solid #2553c2',
                                                    background: '#2553c2',
                                                    transition: '0.3s ease-in-out',
                                                }}
                                            >
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mx-5">
                                        <div className="d-flex justify-content-center">
                                            <SkeletonTheme color="#fff" highlightColor="#e0e0e0">
                                                <Skeleton circle={true} height={135} width={135} />
                                            </SkeletonTheme>
                                        </div>
                                        <div
                                            className="text-center text-white mt-3 mb-4"
                                            style={{
                                                minHeight: '72px'
                                            }}
                                        >
                                            <SkeletonTheme color="#fff" highlightColor="#e0e0e0">
                                                <Skeleton height={20} />
                                            </SkeletonTheme>
                                        </div>
                                        <div className="text-center mb-0">
                                            <SkeletonTheme color="#fff" highlightColor="#e0e0e0">
                                                <Skeleton count={5} />
                                            </SkeletonTheme>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                        
                    </Slider>
                </div>                
            </div>
        )
    }
}

const IMGWrapper = styled.img`
    width: 135px;
    border: 4px solid #2553c2;
    cursor: pointer;
    transform: scale(0.9);
    -webkit-transform: scale(0.9);
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
        transition: transform 0.5s ease-in-out;
    }
`