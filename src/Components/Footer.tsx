const Footer = () => {
  return (
    <div className=" items-center justify-center ">
      <div className="flex justify-between">
        <div>
          <p>
            {" "}
            <small>
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </small>
          </p>
        </div>
        <div>
          <ul>
            <small>
              <p>Links</p>
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </small>
          </ul>
        </div>
        <div>
          <small>
            <p>Help</p>
            <ul>
              <li>Payment Option</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
            </ul>
          </small>
        </div>
        <div>
          <small>
            <p>Newsletter</p>
            <form action="submit">
              <input placeholder="Enter your email address" />
              <button>Subscribe</button>
            </form>
          </small>
        </div>
      </div>
      <p>
        <small className="text-left">
          2022 Meubel House. All rights reverved
        </small>
      </p>
    </div>
  );
};

export default Footer;
