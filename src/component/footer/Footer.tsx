import style from "./footer.module.scss";

function Footer() {
  return (
    <>
    <div className={`${style.footer}`}>
      <div className="bgFooter">
        <div className="firstLine">
          <div className="cardItem">
            <h2 className="title">GET HELP</h2>
            <ul>
              <li>Contact us</li>
              <li>Shopping</li>
              <li>NIKEID</li>
              <li>Nike+</li>
            </ul>
          </div>
          <div className="cardItem">
            <h2 className="title">ODERS</h2>
            <ul>
              <li>Payment options</li>
              <li>Shipping and delivery</li>
              <li>Return</li>
            </ul>
          </div>
          <div className="cardItem">
            <h2 className="title">REGISTER</h2>
            <p>
              Create one account to manage everything you do with Nike, from
              your shopping preferences to your Nike+ activity
            </p>
            <a className="learnMore" href="/">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className={`${style.secondLine}`}>
      <div className="bgFooter">
        <div className="firstLine">
          <div className="cardItem">
            <h2 className="title">EMAIL SIGN UP</h2>
            <p>Be the first to know about new products and special offers</p>
            <a className="learnMore" href="/">Sign up now</a>
          </div>
          <div className="cardItem">
            <h2 className="title">GIFT CARDS</h2>
            <p>Give the gift that always fits</p>
            <a className="learnMore" href="/">View cards</a>
          </div>
          <div className="cardItem">
            <h2 className="title">STORE NEAR YOU</h2>
            <p>
              Locate a Nike retail store or authorized retailer.
            </p>
            <a className="learnMore" href="/">
              Search
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
