import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-bg-container">
    <Header />
    <div className="content-container">
      <div className="content-cont">
        <h1 className="title">Clothes That Get You Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="sm-img"
        />
        <p className="description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="lg-img"
      />
    </div>
  </div>
)

export default Home
