import { Link } from "react-router-dom"

export const TopPage = () => {
  return (
    <div id="sidebar">
      <h1>Top Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/app">app</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
