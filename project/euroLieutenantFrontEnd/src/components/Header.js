import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header fixed-top">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Link to="/">
              <img
                src="/images/euroLieutenant.png"
                alt="Euro Lieutenant Logo"
                className="img-fluid euroLieutenant"
              />
            </Link>
          </div>
          <div className="col-4">
            <div className="login text-center">
              <Link to="/login">
                <button className="logBtn">Log In</button>
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div className="checkout text-end">
              <Link to="/checkout">
                <img
                  src="/images/cart.png"
                  alt="checkout"
                  className="cart img-fluid"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
            <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
