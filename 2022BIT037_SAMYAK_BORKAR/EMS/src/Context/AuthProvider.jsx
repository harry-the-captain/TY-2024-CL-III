import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null)

useEffect(() => {
  setLocalStorage()
  const {employeess, adminnn}= getLocalStorage();
  setUserData({employeess, adminnn});
}, [])

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
