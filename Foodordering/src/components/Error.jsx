import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error =useRouteError()
    console.log(error)
  return (
    <div>
        <h1>opps!!! somethingwrong</h1>
        <h3>sorry</h3>
    </div>
  )
}

export default Error