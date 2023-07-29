import React from 'react'
import { useInView } from 'react-intersection-observer'

import Layout from '../components/layout/Layout.js'
import Showcase from '../components/layout/Showcase.js'
import Projects from '../components/layout/Projects'
import Footer from '../components/layout/Footer.js'
import Contact from '../components/layout/contact.js'
import Helmet_data from '../components/layout/Helmet_data.js'
import Navbar from '../components/layout/Navbar.js'
import SEO from '../components/seo.jsx'
import BlogFeed from '../components/layout/BlogFeed.js'
import About from '../components/layout/About.js'
import Tools from '../components/layout/Tools.js'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../theme/partials/_works.css'
import '../theme/main.css'
import '../theme/partials/animations.css'

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Preet Suthar 🚀| Frontend Developer"
        description="Welcome to Preet's Portfolio & blog, You'll soo many tips and tricks also some blogs related to web development, javascript, so much other stuff. You are always welcome!"
        image="../img/nano-favicon.png"
        article={false}
      />
      <Navbar />
      <br />
      <br />
      <Showcase />
      <br />
      <br />
      <About />
      <br />
      <br />
      <Helmet_data />
      <Tools />
      <br />
      <br />
      <BlogFeed />
      <br />
      <br />
      <Projects />
      <br />
      <br />
      <Contact />
      <br />
      <br />
      <Footer />
      <br />
      <br />
    </Layout>
  )
}
