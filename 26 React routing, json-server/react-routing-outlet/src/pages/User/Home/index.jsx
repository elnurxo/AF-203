import React from 'react'
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta author="Elnur Khalilov" description="this is home page"/>
        <title>Dribble | Home</title>
      </Helmet>
      <div>Home</div>
    </>
  )
}

export default Home