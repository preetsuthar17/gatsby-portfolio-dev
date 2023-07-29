import React from 'react'
import { useInView } from 'react-intersection-observer'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'gatsby'
const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <div
      ref={ref}
      className={inView ? 'slide-right reveal ' : 'slide-right '}
      id="projects"
    >
      <br />
      <br />
      <h2
        className="projects-h2"
        style={{
          fontWeight: '600',
        }}
      >
        Yeah, I work hard!
      </h2>
      <>
        <div id="projects-container" className="container post-container">
          {' '}
          {/* Project 1 */}
          <div
            ref={ref}
            className={inView ? 'slide-right reveal post' : 'slide-right post'}
          >
            <div className="post-header">
              <h3>Personal portfolio</h3>
            </div>
            <div className="post-content">
              <a href="https://preetsuthar.me" target="_blank">
                {' '}
                🔗Live
              </a>

              <a
                href="https://github.com/preetsuthar17/preetsuthar.me"
                target="_blank"
              >
                😸Github
              </a>
              <p>
                This is an open-source personal portfolio website built using
                Gatsby.js and deployed using Vercel.
              </p>
            </div>
          </div>
          {/* Project 2 */}
          <div
            ref={ref}
            className={inView ? 'slide-right reveal post' : 'slide-right post'}
          >
            <div className="post-header">
              <h3>blogs page</h3>
            </div>
            <div className="post-content">
              <a href="https://blog.preetsuthar.me" target="_blank">
                {' '}
                🔗Live
              </a>

              <a
                href="https://github.com/preetsuthar17/blog.preetsuthar.me"
                target="_blank"
              >
                😸Github
              </a>
              <p>🚀 My personal blog created using Gatsby</p>
            </div>
          </div>
          {/* Project 3 */}
          <div
            ref={ref}
            className={inView ? 'slide-right reveal post' : 'slide-right post'}
          >
            <div className="post-header">
              <h3>Typefiddle</h3>
            </div>
            <div className="post-content">
              <a href="https://typefiddle.vercel.app/" target="_blank">
                {' '}
                🔗Live
              </a>

              <a
                href="https://github.com/preetsuthar17/Typefiddle"
                target="_blank"
              >
                😸Github
              </a>
              <p>
                ⌨ Another typing test website. Typefiddle is a minimalistic
                typing test website with a history of your test.
              </p>
            </div>
          </div>
          {/* Project 4 */}
          <div
            ref={ref}
            className={inView ? 'slide-right reveal post' : 'slide-right post'}
          >
            <div className="post-header">
              <h3>create-webdev-app</h3>
            </div>
            <div className="post-content">
              <a
                href="https://www.npmjs.com/package/create-webdev-app"
                target="_blank"
              >
                {' '}
                🔗Live
              </a>

              <a
                href="https://github.com/preetsuthar17/create-webdev-app"
                target="_blank"
              >
                😸Github
              </a>
              <p>
                ⚡ Powerful command-line interface to generate a web developer
                starter app in a few seconds.
              </p>
            </div>
          </div>
          {/* Project 5 */}
          <div
            ref={ref}
            className={inView ? 'slide-right reveal post' : 'slide-right post'}
          >
            <div className="post-header">
              <h3>Pritudev Theme</h3>
            </div>
            <div className="post-content">
              <a
                href="https://marketplace.visualstudio.com/items?itemName=Pritudev.pritu-dark-theme"
                target="_blank"
              >
                {' '}
                🔗Live
              </a>

              <a
                href="https://github.com/preetsuthar17/pritu-dark-theme"
                target="_blank"
              >
                😸Github
              </a>
              <p>
                🎨 Official theme for Visual Studio Code made by preetsuthar.
                Dark Theme yet beautiful, 700+ installs.
              </p>
            </div>
          </div>
          {/* Project 6 */}
          <div
            ref={ref}
            className={inView ? 'slide-right reveal post' : 'slide-right post'}
          >
            <div className="post-header">
              <h3>tilt.js demo code</h3>
            </div>
            <div className="post-content">
              <a href="https://tiltjs-demo.vercel.app/" target="_blank">
                {' '}
                🔗Live
              </a>

              <a
                href="https://github.com/preetsuthar17/tilt.js-demo"
                target="_blank"
              >
                😸Github
              </a>
              <p>Demo project created using vanilla-tilt.js</p>
            </div>
          </div>
        </div>
        <p className="post-container-view-more">
          <em>
            Check out more projects on my{' '}
            <Link to="https://github.com/preetsuthar17" target="_blank">
              Github
            </Link>
          </em>
        </p>
      </>
      <br />
      <br />
    </div>
  )
}

export default Projects
