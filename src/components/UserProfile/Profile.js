import { useState, useEffect } from "react"
import { useParams, Redirect } from "react-router-dom"

const Profile = ({ isLoggedIn}) => {
  const [user, setUser] = useState(null)
  const { id } = useParams()
  const URL = `http://localhost:4000/user/${id}`

  const getUser = async () => {
    try {
      const response = await fetch(URL)
      const result = await response.json()
      setUser(result)
      console.log(result)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(`Current User: ${JSON.stringify(user)}`)

  useEffect(() => {
    getUser()
  }, [])

  return <h1>hi {user && user.username}</h1>
}

export default Profile
