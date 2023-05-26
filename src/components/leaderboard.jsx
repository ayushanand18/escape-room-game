import { useState, useEffect } from "react"
import { app, db, auth } from "./firebase"
import  "../styles/leaderboard.css"

function Leaderboard () {
    // firebase configurations, do not change
    const [authState, setAuthState] = useState({
        isSignedIn: false,
        pending: true,
        user: null,
    })
    
    useEffect(() => {
      const unregisterAuthObserver = auth.onAuthStateChanged(user => 
          setAuthState({ user, pending: false, isSignedIn: !!user })
      )
      return () => unregisterAuthObserver()
    }, [])

    return <div>

    </div>
}

export default Leaderboard;