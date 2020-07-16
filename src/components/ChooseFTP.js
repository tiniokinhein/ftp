import React, { Component } from 'react'
import Axios from 'axios'
import Parser from 'html-react-parser'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'
import { 
    CHOOSEFTP,
    TESTIMONIALS
} from '../Constants'
import Slider from 'react-slick'


export default class ChooseFTP extends Component {

    state = {
        post: null,
        tests: []
    }

    fetchData = () => {
        Axios.get(CHOOSEFTP)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })
    }

    fetchTESTIMONIALS =() => {
        Axios.get(TESTIMONIALS)
            .then(res => {
                this.setState({
                    tests: res.data
                })
            })
    }

    componentDidMount() {
        this.fetchData()
        this.fetchTESTIMONIALS()
    }

    render() {
        const post = this.state.post
        const tests = this.state.tests

        var settings = {
            dots: false,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
        }

        return (
            <div
                style={{
                    paddingTop: '4rem',
                    paddingBottom: '4rem'
                }}
            >
                {
                    post ? (
                        <div className="container" key={post.nid[0].value}>
                            <h2
                                className="headTitle text-center mb-4 text-uppercase default-color"
                                style={{
                                    letterSpacing: '2px',
                                }}
                                data-aos={"fade-up"}
                                data-aos-duration={"2000"}
                            >
                                {Parser(post.title[0].value)}
                            </h2>
                            <p
                                className="p-font text-secondary text-center mb-5"
                                style={{
                                    fontSize: '22px',
                                    lineHeight: '1.5em',
                                    width: '770px',
                                    maxWidth: '100%',
                                    margin: '0 auto'
                                }}
                                data-aos={"fade-up"}
                                data-aos-duration={"2000"}
                                dangerouslySetInnerHTML={{__html: post.body[0].value}}
                            />
                            <div
                                className="position-relative"
                                data-aos={"fade-up"}
                                data-aos-duration={"2000"}
                            >
                                <img
                                    src={post.field_custom_page_image[0].url}
                                    alt={post.title[0].value}
                                    className="w-100"
                                    style={{
                                        minHeight: '400px',
                                        maxHeight: '460px',
                                        objectFit: 'cover',
                                        filter: 'brightness(50%)'
                                    }}
                                />
                                <div
                                    className="position-absolute"
                                    style={{
                                        left: '0',
                                        right: '0',
                                        top: '0',
                                        bottom: '0',
                                        zIndex: '5'
                                    }}
                                >
                                    <div
                                        className="d-table w-100 h-100"
                                    >
                                        <div
                                            className="d-table-cell align-middle"
                                        >
                                            <Slider
                                                {...settings}
                                            >
                                                {
                                                    tests.map((test) => (
                                                        <BlockquoteWrapper
                                                            key={test.nid[0].value}
                                                        >
                                                            <blockquote 
                                                                className="blockquote col-12 col-lg-8"
                                                            >
                                                                <p 
                                                                    className="mb-0 headTitle text-white"
                                                                    dangerouslySetInnerHTML={{__html: test.body[0].value}}
                                                                />
                                                                <footer 
                                                                    className="blockquote-footer p-font text-light"
                                                                >
                                                                    {Parser(test.title[0].value)}
                                                                </footer>
                                                            </blockquote>
                                                        </BlockquoteWrapper>
                                                    ))
                                                }
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    ) : (
                        <div className="container">
                            <div
                                className="mb-4 mx-auto"
                                style={{
                                    width: '250px',
                                    maxWidth: '100%',
                                    margin: '0 auto'
                                }}
                            >
                                <Skeleton height={35} />
                            </div>
                            <div
                                className="mb-5"
                                style={{
                                    lineHeight: '2em',
                                    width: '770px',
                                    maxWidth: '100%',
                                    margin: '0 auto'
                                }}
                            >
                                <Skeleton count={5} />
                            </div>
                            <div
                            >
                                <Skeleton height={460} />
                            </div>
                        </div>
                    )
                }  
            </div>
        )
    }
}

const BlockquoteWrapper = styled.div`
    blockquote {
        padding-left: 4rem;
        padding-right: 4rem;       
    }
    blockquote p {
        font-size: 30px;
        line-height: 1.5em;
        letter-spacing: 0.5px;
    }
    blockquote footer {
        font-size: 14px;
    }

    @media screen and (max-width: 767px) {
        blockquote {
            padding-left: 1rem;
            padding-right: 1rem;
        }
        blockquote p {
            font-size: 20px;
        }
        blockquote footer {
            font-size: 12px;
        }
    }
`