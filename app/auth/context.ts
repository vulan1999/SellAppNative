import React from 'react'

interface AuthInterface {
  user: any
  setUser: React.Dispatch<React.SetStateAction<any>>
}

const AuthContext = React.createContext<AuthInterface | null>(null)

export default AuthContext
