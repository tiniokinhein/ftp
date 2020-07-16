import React from 'react'
import Helmet from 'react-helmet'
import loadable from '@loadable/component'


const Layout = loadable(() => import('../components/layout/Layout'))

export default ({ staticContext = {} }) => {

    staticContext.status = 404

    return(
        <Layout>
            <Helmet />

            <div
                className="bg-light position-relative"
                style={{
                    height: '100vh',
                    minHeight: '600px'
                }}
            >
                <div
                    className="position-absolute"
                    style={{
                        left: '0',
                        top: '0',
                        right: '0',
                        bottom: '0'
                    }}
                >
                    <div 
                        className="d-table w-100 h-100"
                    >
                        <div 
                            className="d-table-cell align-middle"
                        >
                            <p
                                className="headTitle text-secondary text-center px-3"
                                style={{
                                    fontSize: '30px',
                                    fontWeight: '900',
                                    letterSpacing: '1px'
                                }}
                            >
                                The page you are looking for, is not found !
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
