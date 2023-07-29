import React from 'react'
import '../css/About.css'
import brand from './svgs/nano-favicon.png'
import { Link } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })
  return (
    <>
      <div
        ref={ref}
        className={
          inView
            ? 'slide-up reveal about_container'
            : 'slide-up about_container'
        }
      >
        <br />
        <br />
        <section></section>
        <section>
          <div>
            <h2>About Me</h2>
            <p className="about_body">
              Hello! I'm <span className="hi-code">Preet Suthar</span>, a
              self-taught web developer aged 16 with more than two years of
              experience. I'm constantly learning and developing my skills in
              the constantly evolving world of web development. I'm
              knowledgeable in a variety of technologies, including HTML, CSS,
              JavaScript, and others. I strive to create aesthetically pleasing
              and user-friendly websites since I have a keen eye for design.
              Together, let's create something amazing!{' '}
              <div style={{ paddingTop: '20px' }}>
                I'm truly enthused about the prospect of lending my skills and
                knowledge to innovative projects. I firmly believe in the value
                of collaboration and the potential for creativity that can
                result from the fusion of imaginative minds. Come along, and
                let's embark on a terrific web development journey!{' '}
                <AnchorLink to="#contact">Let's work together!</AnchorLink>
              </div>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
