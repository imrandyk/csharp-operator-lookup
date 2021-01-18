import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { useTrail, animated } from 'react-spring'
import VisuallyHidden from '@reach/visually-hidden'

const Operators = () => {
  const queryData = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___operator], order: DESC }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            operator
            title
          }
        }
      }
    }
  `)
  let { nodes: data } = queryData?.allMarkdownRemark
  data = data.sort((a, b) => (a.frontmatter.name > b.frontmatter.name ? 1 : -1))
  const AnimatedLink = animated(Link)
  const trail = useTrail(data.length, {
    config: { mass: 1, tension: 500, friction: 10, clamp: true },
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 20 },
  })
  return (
    <>
      <p className="text-center py-3 text-lg">
        Or, just pick one to learn more:
      </p>
      <div className="w-6/12 mx-auto text-center">
        {trail.map(({ x, height, ...rest }, index) => {
          const {
            frontmatter: { operator, title },
            fields: { slug: name },
          } = data[index]
          return (
            <AnimatedLink
              key={index}
              className="font-mono inline-block px-2 py-1 rounded-sm mb-1 mr-2 text-sm text-white dark:text-black bg-primary-700 hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-400 outline-none transition-colors ease-out duration-75 ring-offset-white dark:ring-offset-black ring-offset-2 focus:ring-2 focus:ring-primary-400"
              to={name}
              style={{
                ...rest,
                transform: x.interpolate(num => `translate3d(0,${num}px,0)`),
              }}
            >
              {operator}
              <VisuallyHidden>{title}</VisuallyHidden>
            </AnimatedLink>
          )
        })}
      </div>
    </>
  )
}

export default Operators
