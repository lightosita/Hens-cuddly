import { Form, Link } from "react-router-dom";
const contact = () => {
  return (
    <div>
      <div>
        <img src="" alt="logo" />
        <h2>Contact</h2>
        <Link to="/">Home</Link>
      </div>
      <div>
        <h2></h2>
        <p>
          <small></small>
        </p>

        <div>
          <div>
            <div>
              {" "}
              <p>Address</p>
              <p>
                <small>
                  236 5th SE Avenue, New York NY10000, United States
                </small>
              </p>
            </div>
            <div>
              {" "}
              <p>Phone no</p>
              <p>
                <small>
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </small>
              </p>
            </div>
            <div>
              {" "}
              <p>Working Time</p>
              <p>
                <small>
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </small>
              </p>
            </div>
          </div>
          <div>
            <Form></Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
