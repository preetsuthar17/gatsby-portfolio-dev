import React, { Fragment, useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import { useInView } from 'react-intersection-observer'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
const Showcase = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })
  const [followers, setFollowers] = useState(0)

  useEffect(() => {
    async function getGithubAPI() {
      const response = await fetch('https://api.github.com/users/preetsuthar17')
      const data = await response.json()

      return data
    }

    getGithubAPI().then((data) => {
      setFollowers(data.followers)
    })
    const fb = document.getElementById('follow-btn')
    const fn = document.getElementById('followers-num')

    if (isNaN(fb)) {
      document.getElementById('follow-btn').innerText = ' '
    }
  }, [])
  return (
    <>
      <Wrapper>
        <div
          ref={ref}
          className={inView ? 'slide-up reveal showcase' : 'slide-up showcase'}
          id="scroll-top"
        >
          <div className="container-showcase">
            <h1
              style={{
                fontSize: '7em',
                paddingTop: '5rem',
              }}
            >
              Hi 👋, I am
              <br />
              <span id="gradient-text" className="hover-underline-animation">
                Preet.
              </span>
            </h1>
            <br />
            <div className="showcase_buttons" style={{ textAlign: 'center' }}>
              <AnchorLink
                rel="noopener"
                to="https://github.com/preetsuthar17"
                target="_blank"
              >
                <AnchorLink className="indigo-btn">
                  <span></span>
                  🐱 <span id="follow-btn">{Number(followers)}</span>{' '}
                  <span id="followers-num">GitHub followers</span>
                </AnchorLink>
              </AnchorLink>
            </div>
          </div>
        </div>
        <br />
      </Wrapper>
    </>
  )
}

export default Showcase
