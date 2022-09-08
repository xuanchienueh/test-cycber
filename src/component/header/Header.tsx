import { Link } from "react-router-dom";
import style from "./header.module.scss";

function Header() {
  return (
    <>
      <header>
        <div className={`${style.header}`}>
          <div className="logo">
            <Link to='/'>
              <img src="/image/logo.png" alt="logo" width={140} />
            </Link>
          </div>
          <div className="rightHeader">
            <div className="cart">
              <img src="/image/cart.png" alt="cart" />
              <span className="numberProduct">(1)</span>
            </div>

            <div className="auth">
              <div className="login">
                <a href="/">Login</a>
              </div>
              <div className="register">
                <Link to='register'>Register</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div style={{ width: "100%", paddingLeft: '50px' }}>
        <ul className={`${style.menu}`}>
          <li className="active">
            <a href="/">Home</a>
          </li>
          <li className="fontWeight">
            <a href="/">Men</a>
          </li>
          <li className="fontWeight">
            <a href="/">Woman</a>
          </li>
          <li>
            <a href="/">Kid</a>
          </li>
          <li>
            <a href="/about">Sport</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
