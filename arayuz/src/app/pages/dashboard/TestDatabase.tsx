import { useEffect, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"

const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000/api/"
    : "https://localhost:5000/api/"

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
  const [isDeletingUser, setIsDeletingUser] = useState(false)

  const deleteUser = async () => {
    setIsDeletingUser(true)
    await axios
      .delete(`${API_URL}users/${user.id}`)
      .then(() => toast.success("Deleted user."))
      .then(fetchUsers)
      .then(() => setIsDeletingUser(false))
      .catch(() => toast.error("Couldn't delete user."))
  }

  return (
    <>
      <li>{user.id}</li>
      <li>{user.username}</li>
      <li>{user.email}</li>
      <li>{user.password}</li>
      <li>
        {!isDeletingUser ? (
          <button onClick={deleteUser}>removeUser</button>
        ) : (
          <button disabled>deletingUser...</button>
        )}
      </li>
    </>
  )
}

const TestDatabase = () => {
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}users`)
      setUsers(response.data)
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
            .post(`${API_URL}users`, {
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
            .post(`${API_URL}users/removeAllUsers`)
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
        {users.map((user, i) => (
          <UserListItem key={i} user={user} fetchUsers={fetchUsers} />
        ))}
      </ul>
    </>
  )
}

export { TestDatabase }
