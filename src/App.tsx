import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { db } from './lib/utils'
import { getDoc, doc } from 'firebase/firestore'
import type { User } from './globals/types'


export const App = () => {

const [user, setUser] = useState<User | null>(null)


  const getUser = async (userID: number) => {
    const userRef = await getDoc(doc(db, 'users', userID.toString()))

    if (!userRef) {
      console.log('User not found')
    }

    setUser(userRef.data() as User)

    console.log(user)
  }


  return (
      <div className="card">
        <Button variant="outline" onClick={() => getUser(1)}>
          Get User        
        </Button>
       <div>
        <p>
          Hi {user?.name}
        </p>
       </div>

      </div>

  )
}
