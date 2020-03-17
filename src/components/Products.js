import React, { Component } from 'react'
import Axios from 'axios'
import Parser from 'html-react-parser'
import Skeleton from 'react-loading-skeleton'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { PRODUCTS } from '../Constants'
import styled from 'styled-components'

export default class Products extends Component {

    state = {
        products: [],
        visible: 6
    }

    loadMore() {
        this.setState((prev) => {
            return {
                visible: prev.visible + 3
            }
        })
    }

    fetchProducts = () => {
        Axios.get(PRODUCTS)
            .then(res => {
                this.setState({
                    products: res.data
                })
            })
    }

    componentDidMount() {
        this.fetchProducts()
    }

    render() {
        const products = this.state.products
        const visible = this.state.visible

        const productLists = products.length ? (
            <>

                {
                    products.slice(0,visible).map((product) => (
                        <div
                            className="col-6 col-lg-4 py-3"
                            key={product.nid[0].value}
                            data-aos={"fade-up"}
                            data-aos-duration={"2000"}
                        >
                            <div className="px-2 px-lg-5">
                                <LazyLoadImageWrapper>
                                    <LazyLoadImage
                                        src={product.field_products_image[0].url}
                                        alt={product.title[0].value}
                                        width="100%"
                                        height="100%"
                                        effect="blur"
                                    />
                                </LazyLoadImageWrapper>
                                <h4
                                    className="headTitle text-center my-4 text-secondary"
                                    style={{
                                        fontSize: '20px',
                                        letterSpacing: '1px'
                                    }}
                                >
                                    {Parser(product.title[0].value)}
                                </h4>
                            </div>
                        </div>
                    ))
                }

                {
                    visible < products.length &&

                    <div
                        className="col-12 text-center mt-4"
                        data-aos={"fade-up"}
                        data-aos-duration={"2000"}
                    >
                        <button
                            onClick={this.loadMore.bind(this)}
                            className="more-link px-3 py-2 rounded-0 headTitle text-capitalize text-dark bg-warning"
                            style={{
                                letterSpacing: '1px',
                                border: '1px solid #ffc107',
                                transition: '0.3s ease-in-out',
                            }}
                        >
                            View More
                        </button>
                    </div>
                }

            </>
        ) : (
            <>
                <div className="col-6 col-lg-4 py-3">
                    <div className="px-2 px-lg-5">
                        <Skeleton height={370} />
                        <div className="text-center my-4" >
                            <Skeleton height={20} width={200} />
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 py-3">
                    <div className="px-2 px-lg-5">
                        <Skeleton height={370} />
                        <div className="text-center my-4" >
                            <Skeleton height={20} width={200} />
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 py-3">
                    <div className="px-2 px-lg-5">
                        <Skeleton height={370} />
                        <div className="text-center my-4" >
                            <Skeleton height={20} width={200} />
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 py-3">
                    <div className="px-2 px-lg-5">
                        <Skeleton height={370} />
                        <div className="text-center my-4" >
                            <Skeleton height={20} width={200} />
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 py-3">
                    <div className="px-2 px-lg-5">
                        <Skeleton height={370} />
                        <div className="text-center my-4" >
                            <Skeleton height={20} width={200} />
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 py-3">
                    <div className="px-2 px-lg-5">
                        <Skeleton height={370} />
                        <div className="text-center my-4" >
                            <Skeleton height={20} width={200} />
                        </div>
                    </div>
                </div>
            </>
        )

        return (
            <div
                className="bg-light"
                style={{
                    paddingTop: '3rem',
                    paddingBottom: '2rem'
                }}
            >
                <div className="container">
                    <h2
                        className="headTitle text-center mb-4 default-color"
                        style={{
                            letterSpacing: '1px'
                        }}
                        data-aos={"fade-up"}
                        data-aos-duration={"2000"}
                    >
                        Our Products
                    </h2>
                    <div className="row">
                        {productLists}
                    </div>
                </div>
            </div>
        )
    }
}

const LazyLoadImageWrapper = styled.div`
    cursor: pointer;
    display: block;
    position: relative;
    width: 100%;
    overflow: hidden;
    transition: 0.2s ease-in-out;
    &:before {
        position: absolute;
        content: '';
        left: 100%;
        top: -200px;
        right: 0;
        bottom: 0;
        z-index: 5;
        background: rgba(0, 73, 237, 0.55);
        transform: rotate(45deg);
        opacity: 0;
        transform-origin: left bottom;
        transition: 0.2s ease-in-out;
    }
    &:hover:before {
        left: 0;
        opacity: 1;
        transform: rotate(45deg);
        transition: 0.3s ease-in-out;
    }
`