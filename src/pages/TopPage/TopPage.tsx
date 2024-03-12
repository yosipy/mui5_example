import { Link } from "react-router-dom"

export const TopPage = () => {
  return (
    <div id="sidebar">
      <h1>Top Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Top</Link>
          </li>
          <li>
            <Link to="/app">App</Link>
          </li>
          <li>
            <Link to="/layout/two_column">TwoColumnPage</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
