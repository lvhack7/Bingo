import React, {useContext, useEffect, useState} from 'react'
import {auth, provider} from '../pages/firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setUser] = useState()

    function signIn() {
       return auth.signInWithPopup(provider)
    }

    function logout() {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signIn,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
