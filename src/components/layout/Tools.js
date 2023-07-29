import React from 'react'
import { useInView } from 'react-intersection-observer'

import html from '../../pages/svgs/html.svg'
import js from '../../pages/svgs/js.svg'
import gatsby from '../../pages/svgs/gatsby.svg'
import css from '../../pages/svgs/css.svg'

const Tools = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })
  return (
    <div>
      <section className="skills-section">
        <h2>My Backpack</h2>
        <br />
        <span
          ref={ref}
          className={
            inView ? 'slide-up reveal skills-grid' : 'slide-up skills-grid'
          }
        >
          <div className="img">
            <abbr id="tooltip" title="HTML">
              <div id="tooltip">
                <img alt="HTML" src={html} />
              </div>
            </abbr>
          </div>

          <div className="img">
            <abbr id="tooltip" title="CSS">
              <div id="tooltip">
                <img alt="CSS" src={css} />
              </div>
            </abbr>
          </div>

          <div className="img">
            <abbr id="tooltip" title="Javascript">
              <div id="tooltip">
                <img alt="Javascript" src={js} />
              </div>
            </abbr>
          </div>
          <div className="img">
            <abbr id="tooltip" title="Gatsby">
              <div id="tooltip">
                <img alt="Gatsby" src={gatsby} />
              </div>
            </abbr>
          </div>
        </span>
        <br />
        <br />
        <p>
          <em>
            This is not a full list of my skills. I'm also open to learn more
            frontend skills!
          </em>
        </p>
      </section>
    </div>
  )
}

export default Tools
