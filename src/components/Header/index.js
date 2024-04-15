import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="sm-img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="header-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="nav-logout"
      />
    </div>
    <div className="nav-items">
      <Link to="/" className="link">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="nav-home"
        />
      </Link>

      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav home"
        className="nav-home"
      />

      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav home"
        className="nav-home"
      />
    </div>

    <ul className="items-list">
      <Link to="/" className="link">
        <li className="item">Home</li>
      </Link>
      <li>Products</li>
      <li>cart</li>
      <button type="button" className="log-out">
        LogOut
      </button>
    </ul>
  </nav>
)
export default Header
