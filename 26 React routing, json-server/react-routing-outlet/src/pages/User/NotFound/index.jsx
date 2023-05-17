import React from 'react'
import { Helmet } from 'react-helmet'

const NotFound = () => {
  return (
    <>
       <Helmet>
        <meta charSet="utf-8" />
        <meta author="Elnur Khalilov" description="this is home page"/>
        <title>Dribble | Not Found</title>
      </Helmet>
      <div>NotFound</div>
    </>
  )
}

export default NotFound