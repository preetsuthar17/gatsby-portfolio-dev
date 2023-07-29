import { Helmet } from 'react-helmet'
import React from 'react'

const Helmet_data = () => {
  return (
    <>
      <Helmet>
        <title>Preet Suthar 🚀| Frontend Developer</title>
        <meta
          name="og:description"
          content="Welcome to my Portfolio & blog, You'll soo many tips and tricks also some blogs related to web development, javascript, so much other stuff. You are always welcome"
        />
        <meta
          name="description"
          content="Welcome to my Portfolio & blog, You'll soo many tips and tricks also some blogs related to web development, javascript, so much other stuff. You are always welcome"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Webdeveloper, web development, css, blog, dev blog, pritudev, pritu, prit, prit dev, pritu developer, preet, preet suthar, Preet Suthar"
        />
        <meta name="author" content="Preet Suthar" />
        <meta property="og:title" content="PreetSuthar" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Helmet>
    </>
  )
}

export default Helmet_data
