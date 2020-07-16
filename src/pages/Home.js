import React, { Component , Suspense } from 'react'
import { Helmet } from 'react-helmet'
import LOGO from '../ftp_logo.png'
import HOMELOGO from '../assets/images/og-logo.jpg'


const Layout = React.lazy(() => import('../components/layout/Layout'))
const Slides = React.lazy(() => import('../components/Slides'))
const Overview = React.lazy(() => import('../components/Overview'))
const Products = React.lazy(() => import('../components/Products'))
const ChooseFTP = React.lazy(() => import('../components/ChooseFTP'))
const Contact = React.lazy(() => import('../components/Contact'))
const Services = React.lazy(() => import('../components/Services'))

export default class Home extends Component {
    render() {
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
                    
                    <Helmet
                        title=""
                        meta={[
                            {
                                name: 'description',
                                content: 'Frontier Technology Partners is providing business business solutions for new markets.'
                            },
                            {
                                name: 'keywords',
                                content: 'ftp , frontier technology partners , business solutions , mobile payment system systems for Myanmar market , leading financial company in South East Asia'
                            },
                            {
                                property: 'og:description',
                                content: 'Frontier Technology Partners is providing business business solutions for new markets.'
                            },
                            { property: 'og:title', content: 'Frontier Technology Partners' },
                            { property: 'og:url', content: `${window.location.href}` },
                            { property: 'og:image', content: `${HOMELOGO}` },
                            { property: 'twitter:image:src', content: `${HOMELOGO}` },
                            { property: 'twitter:title', content: 'Frontier Technology Partners' },
                            { property: 'twitter:description', content: 'Frontier Technology Partners is providing business business solutions for new markets.' }
                        ]}
                    >
                        <link rel="canonical" href={window.location.href} />
                    </Helmet>
                    
                    <Slides />
                    <Overview />
                    <Services />
                    <ChooseFTP />
                    <Products />
                    <Contact />
                    
                </Layout>
            </Suspense>
        )
    }
}
