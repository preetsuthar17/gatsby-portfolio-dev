import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const siteUrl = 'https://preetsuthar.me'
  const seoTitle = title ? `${title} | Preet Suthar` : 'Preet Suthar'
  const seoDescription =
    description ||
    "Welcome to Preet's Portfolio & blog, You'll soo many tips and tricks also some blogs related to web development, javascript, so much other stuff. You are always welcome!"
  const seoImage = image ? `${siteUrl}${image}` : '../img/nano-favicon.png'

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />

      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={`${siteUrl}${pathname}`} />
      <meta property="og:type" content={article ? 'article' : 'website'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
    </Helmet>
  )
}

export default SEO
