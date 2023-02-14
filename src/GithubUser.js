import {useGithubUser} from "./useGithubUser"
import { useParams } from "react-router-dom"

export function GithubUser ( {username} ) {
const {user, error} = useGithubUser(username)
const {username} = useParams()

  return (
    <div>
      <p>Username: {user.login}</p>
      <p>Name: {user.name}</p>
      {error && <h5>{error.message}</h5>}
    </div>
  )
  }


