import React, { useEffect, useState } from 'react'
import { parseString } from 'xml2js'
import { useInView } from 'react-intersection-observer'

import '../../theme/main.css'

const BlogFeed = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })
  const [blogData, setBlogData] = useState([])

  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
        const response = await fetch('https://blog.preetsuthar.me/rss.xml')
        const xmlData = await response.text()

        parseString(xmlData, (err, result) => {
          if (err) {
            console.error('Error parsing RSS feed XML:', err)
            return
          }

          const { rss } = result
          if (!rss || !rss.channel || !rss.channel[0] || !rss.channel[0].item) {
            console.error('Invalid RSS feed structure')
            return
          }

          const { channel } = rss
          const items = channel[0].item

          const processedData = items.slice(0, 3).map((item) => {
            const pubDate = new Date(item.pubDate[0])
            const formattedPubDate = pubDate.toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })

            return {
              title: item.title[0],
              link: item.link[0],
              description: item.description[0],
              pubDate: formattedPubDate,
            }
          })

          setBlogData(processedData)
        })
      } catch (error) {
        console.error('Error fetching RSS feed:', error)
      }
    }

    fetchRSSFeed()
  }, [])

  return (
    <div
      ref={ref}
      className={inView ? 'slide-up reveal blogFeed' : 'slide-up blogFeed'}
    >
      <br />
      <br />
      // <h2 className="blogfeed-header">Recent Blog Posts</h2>
      <br />

      <ul>
        {blogData.map((blogItem, index) => (
          <li key={index}>
            <p>
              <a href={blogItem.link}>{blogItem.title}</a>
              <p>
                {blogItem.description}
                <br />
                Date: {blogItem.pubDate}
              </p>
            </p>
          </li>
        ))}
      </ul>
      // <a href="https://blog.preetsuthar.me" target="_blank">
      //   📒 Check out more blogs...
      // </a>
    </div>
  )
}

export default BlogFeed
