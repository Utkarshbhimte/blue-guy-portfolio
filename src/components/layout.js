import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

// styles
import './layout.css'
import "./styles/milligram.css"
import "./styles/normalize.css"

// components
import Sidebar from './sidebar'
import { sidebarWidth } from '../utils/constants'

const PageGrid = styled.div`
  display: grid;
  grid-template-columns: ${sidebarWidth} 1fr;
  min-height: 300vh;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>

          {/* <!-- FONT --> */}
          <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400" rel="stylesheet" />

        </Helmet>

        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

        <PageGrid>
          <Sidebar />
          <div> {children} </div>
        </PageGrid>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
