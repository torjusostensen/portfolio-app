import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import './PortfolioLayout.css'

const PortfolioLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header className="header">
        <div className="logo">
          <h1>
            <Link to={routes.home()}>Torjus Østensen</Link>
          </h1>
        </div>
        <div className="right-section">
          <nav className="main-nav">
            <ul>
              <li>
                <Link to={routes.home()}>Home</Link>
              </li>
              <li>
                <Link to={routes.about()}>About</Link>
              </li>
              <li>
                <Link to={routes.contact()}>Contact</Link>
              </li>
            </ul>
          </nav>
          {isAuthenticated ? (
            <div className="auth-status">
              <span className="user-email">{currentUser.email}</span>
              <button className="logout-button" type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()} className="login-link">
              Login
            </Link>
          )}
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default PortfolioLayout
