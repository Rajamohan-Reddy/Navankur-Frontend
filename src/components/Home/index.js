import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">
          Revolutionizing Agriculture: Digitalizing the Future of Food
          Production
        </h1>
        <img
          src="https://www.navankur.org/images/navankurlogo.svg"
          alt="clothes to be noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Navankur, is an Agri-tech Brand of Radiant Infonet Pvt. Ltd., stands
          at the forefront of agricultural innovation, transforming farming
          through AI technology. We champion Green Farming, Precision
          Agriculture, and Sustainability. Navankur is an innovative agriculture
          firm that revolutionizes farming practices, empowering Indian farmers.
          Committed to sustainability, our vision is to foster a greener and
          more resilient agricultural ecosystem through innovation. We believe
          in Smart Farming and Conservation Techniques to maximize yields.
        </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
      <img
        src="https://www.navankur.org/images/navankurlogo.svg"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
