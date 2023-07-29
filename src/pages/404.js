import React from 'react'
import Layout from '../components/layout/Layout.js'
import '../theme/main.css'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
const notFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>Page Not Found Found • 404</title>
        <title>Preet Suthar</title>
        <meta name="og:description" content="Error 404 Page Not Found." />
        <meta name="description" content="Error 404 Page Not Found." />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Webdeveloper, web development, css, blog, dev blog, pritudev, pritu, prit, prit dev, pritu developer"
        />
        <meta name="author" content="Prit Dev" />
        <meta property="og:title" content="Error 404 Page Not Found!" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Helmet>
      <div id="error_page">
        <h2 className="h2" id="error__heading" style={{ textAlign: 'center' }}>
          Page Not Found
        </h2>
        <h5 id="error__body">
          Sorry 😔—we couldn’t find what you<br></br>were looking for.
        </h5>
        <h5 id="error__link">
          <AnchorLink to="/">Go back to home page</AnchorLink>
        </h5>
      </div>
    </Layout>
  )
}

export default notFound
