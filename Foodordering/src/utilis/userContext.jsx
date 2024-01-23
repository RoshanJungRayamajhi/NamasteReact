import React, { createContext } from 'react'

const userContext = createContext({
  loggedInuser: 'Default user',
})
export default userContext;