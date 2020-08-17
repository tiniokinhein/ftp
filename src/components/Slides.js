import React, { Component } from 'react'
import Axios from 'axios'
import Slider from 'react-slick'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import AOS from 'aos'
import { SLIDESHOWS } from '../Constants'

export default class Slides extends Component {

    state = {
        posts : []
    }

    fetchData = () => {
        Axios.get(SLIDESHOWS)
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => err)
    }

    componentDidMount() {
        this.fetchData()
        window.scrollTo(0,0)
        AOS.init()
    }

    render() {
        const posts = this.state.posts

        var settings = {
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3500,
            fade: true,
            cssEase: 'ease-in-out',
        }

        const postLists = posts.length ? (
            <Slider 
                {...settings} 
                className="homeSlide"
            >
                {
                    posts.map((post) => (
                        <div
                            key={post.uuid[0].value}
                            className="position-relative d-block"
                        >
                            <img 
                                src={post.field_slide_photo[0].url} 
                                alt="" 
                                className="img-fluid w-100" 
                                style={{
                                    height: '100vh',
                                    minHeight: '600px',
                                    objectFit: 'cover',
                                    filter: 'brightness(85%)'
                                }}
                            />
                            <div
                                className="position-absolute"
                                style={{
                                    left: '0',
                                    top: '0',
                                    right: '0',
                                    bottom: '0',
                                    zIndex: '999999'
                                }}
                            >
                                <div
                                    className="d-table w-100 h-100 px-5"
                                >
                                    <div 
                                        className="d-table-cell align-middle text-center"
                                    >
                                        <h3
                                            className="bold-header text-uppercase text-white mt-5 mb-3"
                                            style={{
                                                letterSpacing: '2px',
                                                fontSize: '3rem',
                                                lineHeight: '1em',
                                                textShadow: '1px 1px 3px #333'
                                            }}
                                        >Business Solution</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        ) : (
            <>
                <SkeletonTheme>
                    <Skeleton height={660} />
                </SkeletonTheme>
            </>
        )

        return (
            <>
                {postLists}
            </>
        )
    }
}
