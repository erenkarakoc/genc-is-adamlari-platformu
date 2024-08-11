import { useEffect, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"

const API_URL =
  window.location.hostname === "localhost"
    ? import.meta.env.VITE_APP_HOST_API_URL
    : "localhost"

interface User {
  id: string
  username: string
  email: string
  password: string
}

const UserListItem: React.FC<{ user: User; fetchUsers: () => void }> = ({
  user,
  fetchUsers,
}) => {
  const [isRemovingUser, setIsRemovingUser] = useState(false)

  const removeUser = async () => {
    setIsRemovingUser(true)
    await axios
      .delete(`${API_URL}/users/${user.id}`)
      .then(() => toast.success("Removed user."))
      .then(fetchUsers)
      .then(() => setIsRemovingUser(false))
      .catch(() => {
        toast.error("Couldn't remove user.")
        setIsRemovingUser(false)
      })
  }

  return (
    <>
      <li>{user.id}</li>
      <li>{user.username}</li>
      <li>{user.email}</li>
      <li>{user.password}</li>
      <li>
        {!isRemovingUser ? (
          <button onClick={removeUser}>removeUser</button>
        ) : (
          <button disabled>removingUser...</button>
        )}
      </li>
    </>
  )
}

const TestDatabase = () => {
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`)
      const data = response.data
      console.log(data)
      setUsers(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      <button
        onClick={() => {
          axios
            .post(`${API_URL}/users`, {
              username: "newuser",
              email: "newuser@example.com",
              password: "password123",
            })
            .then(() => toast.success("Created user."))
            .then(fetchUsers)
            .catch(() => toast.error("Couldn't create user."))
        }}
      >
        createUser()
      </button>
      <button
        onClick={() => {
          axios
            .post(`${API_URL}/users/removeAllUsers`)
            .then((response) => {
              if (response.data.affectedRows) {
                toast.success("Removed all users.")
              } else {
                toast("No user to remove.", {
                  icon: "😶",
                })
              }
            })
            .then(fetchUsers)
            .catch(() => toast.error("Couldn't remove users."))
        }}
      >
        removeAllUsers()
      </button>
      <ul>
        {users
          ? users.map((user, i) => (
              <UserListItem key={i} user={user} fetchUsers={fetchUsers} />
            ))
          : "..."}
      </ul>
    </>
  )
}

export { TestDatabase }
