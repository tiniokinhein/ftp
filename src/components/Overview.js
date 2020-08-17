import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import AOS from 'aos'
import { OVERVIEW } from '../Constants'

export default class Overview extends Component {

    state = {
        post: null
    }

    fetchData = () => {
        Axios.get(OVERVIEW)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })
            .catch(err => err)
    }

    componentDidMount() {
        this.fetchData()
        AOS.init()
    }

    render() {
        const post = this.state.post

        return (
            <div
                className="bg-light"
                style={{
                    paddingTop: '4rem',
                    paddingBottom: '4rem'
                }}
            >
                <div className="container">
                    {
                        post ? (
                            <div
                                key={post.nid[0].value}
                                className="row"
                            >
                                <div className="col-12 col-md-6 pr-3 pr-md-5 pb-4 pb-md-0">
                                    <img   
                                        src={post.field_about_image[0].url}
                                        alt={post.title[0].value} 
                                        className="w-100"
                                        style={{
                                            height: '400px',
                                            minHeight: '350px',
                                            objectFit: 'cover'
                                        }}
                                        data-aos={"fade-up"}
                                        data-aos-duration={"2000"}
                                    />
                                </div>
                                <div 
                                    className="col-12 col-md-6 align-self-center"
                                    data-aos={"fade-up"}
                                    data-aos-duration={"2000"}
                                >
                                    <h2
                                        className="headTitle mb-4 default-color"
                                        style={{
                                            letterSpacing: '2px'
                                        }}
                                    >
                                        Overview
                                    </h2>
                                    <p
                                        dangerouslySetInnerHTML={{__html: post.field_about_overview[0].value}}
                                        className="p-font mb-0 text-secondary font-custom-p"
                                        style={{
                                            fontSize: '24px',
                                            lineHeight: '1.5em'
                                        }}
                                    />
                                    <Link
                                        to="/about-us"
                                        className="more-link px-3 py-2 my-3 d-inline-block headTitle text-capitalize text-dark text-decoration-none bg-warning"
                                        style={{
                                            letterSpacing: '1px',
                                            border: '1px solid #ffc107',
                                            transition: '0.3s ease-in-out',
                                        }}
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="row">
                                <div 
                                    className="col-12 col-md-6 pr-3 pr-md-5 pb-4 pb-md-0"
                                >
                                    <Skeleton height={400} />
                                </div>
                                <div 
                                    className="col-12 col-md-6 align-self-center"
                                >
                                    <div className="mb-4">
                                        <Skeleton width={250} height={35} />
                                    </div>
                                    {
                                        Array(6).fill().map((item,index) => (
                                            <div 
                                                className="mb-3"
                                                key={index}
                                            >
                                                <Skeleton height={25} />
                                            </div>
                                        ))
                                    }
                                    <div className="my-3">
                                        <Skeleton width={180} height={50} />
                                    </div>
                                </div>
                            </div>
                        )
                    } 
                </div> 
            </div>
        )
    }
}
